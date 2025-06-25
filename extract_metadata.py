import os
import json
from PIL import Image
from PIL.ExifTags import TAGS, GPSTAGS

def get_exif(img_path):
    img = Image.open(img_path)
    exif_data = img._getexif() or {}
    data = {}
    for tag, value in exif_data.items():
        name = TAGS.get(tag)
        if name == 'GPSInfo':
            gps = {}
            for t in value:
                subtag = GPSTAGS.get(t)
                gps[subtag] = value[t]
            data['GPSInfo'] = gps
        elif name:
            data[name] = value
    return data


def dms_to_dd(dms, ref):
    deg, min_, sec = dms
    dd = deg + (min_ / 60.0) + (sec / 3600.0)
    if ref in ['S', 'W']:
        dd = -dd
    return dd


def extract_metadata(folder='./photos'):
    metadata = []
    for fname in os.listdir(folder):
        if not fname.lower().endswith(('.jpg', '.jpeg')):
            continue
        path = os.path.join(folder, fname)
        exif = get_exif(path)
        gps = exif.get('GPSInfo', {})
        lat = lon = None
        if 'GPSLatitude' in gps and 'GPSLatitudeRef' in gps:
            lat = dms_to_dd(gps['GPSLatitude'], gps['GPSLatitudeRef'])
        if 'GPSLongitude' in gps and 'GPSLongitudeRef' in gps:
            lon = dms_to_dd(gps['GPSLongitude'], gps['GPSLongitudeRef'])
        metadata.append({
            'filename': fname,
            'latitude': lat,
            'longitude': lon,
        })
    with open('photos_metadata.json', 'w') as f:
        json.dump(metadata, f, indent=2)

if __name__ == '__main__':
    extract_metadata()
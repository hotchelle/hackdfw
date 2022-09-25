import google_streetview.api
import json
import os
import numpy as np
import math

dir = "C:\\Users\\elise\\PycharmProjects\\street_view"
params = []

with open(os.path.join(dir, 'roads.geojson')) as f:
    d = json.load(f)

coords = []

for key in d['features']:
    for coord in key['geometry']['coordinates']:
        coords.append(coord)

print(coords)
a = np.array(coords)
s = np.sort(a, axis=0)
l = s.tolist()
flag = True
while flag:
    for x in range(len(l) - 1):
        d0 = math.isclose(l[x][0], l[x + 1][0], abs_tol=0.0003)
        d1 = math.isclose(l[x][1], l[x + 1][1], abs_tol=0.0003)
        if d0 and d1:
        # distance = math.sqrt((l[x][0]-l[x+1][0])**2 + (l[x][1]-l[x+1][1])**2)
        # if distance < 0.00025:
            l.pop(x + 1)
            break
        if x >=  len(l) - 2:
            flag = False

print(s)
print(len(s))
print(l)
print(len(l))

def set_loc(loc):
    angle = ['0', '90', '180', '270']
    for d in angle:
        params.append({
            'location': loc,
            'heading' : d,
	        #'pitch': '-0.40',
            'fov' : '90', #default is 90
            'key' : 'redacted'
        })


for coord in l:
    set_loc(f'{coord[1]},{coord[0]}')

print(params)


results = google_streetview.api.results(params)

results.download_links('downloads')
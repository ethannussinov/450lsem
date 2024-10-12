import * as topojson from 'topojson-client';

export const convertTopoToGeoJson = (topoData) => {
    return topojson.feature(topoData, topoData.objects.districts);
};

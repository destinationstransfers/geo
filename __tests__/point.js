'use strict';

const geo = require('../');

describe('point format conversion', () => {
  it('latitude', () => {
    expect(geo.latitude([1, 2, 3])).toBe(2);
    expect(geo.latitude({ lat: 2, lng: 3 })).toBe(2);
    expect(geo.latitude({ latitude: 2, longitude: 3 })).toBe(2);
  });

  it('longitude', () => {
    expect(geo.longitude([1, 2, 3])).toBe(1);
    expect(geo.longitude({ lat: 2, lng: 3 })).toBe(3);
    expect(geo.longitude({ latitude: 2, longitude: 3 })).toBe(3);
  });

  const polygon = [
    { latitude: 51.513357512, longitude: 7.45574331 },
    { latitude: 51.515400598, longitude: 7.45518541 },
    { latitude: 51.516241842, longitude: 7.456494328 },
    { latitude: 51.516722545, longitude: 7.459863183 },
    { latitude: 51.517443592, longitude: 7.463232037 },
    { lat: 51.5177507, lon: 7.464755532 },
    { latitude: 51.517657233, longitude: 7.466622349 },
    { latitude: 51.51722995, longitude: 7.468317505 },
    { latitude: 51.516816015, longitude: 7.47011995 },
    { latitude: 51.516308606, longitude: 7.471793648 },
    { latitude: 51.515974782, longitude: 7.472437378 },
    { latitude: 51.515413951, longitude: 7.472845074 },
    { latitude: 51.514559338, longitude: 7.472909447 },
    { latitude: 51.512195717, longitude: 7.472651955 },
    { latitude: 51.511127373, longitude: 7.47140741 },
    { latitude: 51.51029939, longitude: 7.469948288 },
    { latitude: 51.509831973, longitude: 7.468446251 },
    { latitude: 51.509978876, longitude: 7.462481019 },
    [7.460678574, 51.510913701],
    { latitude: 51.511594777, longitude: 7.459434029 },
    { latitude: 51.512396029, longitude: 7.457695958 },
    { latitude: 51.513317451, longitude: 7.45574331 },
  ];

  const polygon2 = [
    { latitude: 51.513357512, longitude: 7.45574331 },
    { latitude: 51.515400598, longitude: 7.45518541 },
    { latitude: 51.516241842, longitude: 7.456494328 },
    { latitude: 51.516722545, longitude: 7.459863183 },
    { latitude: 51.517443592, longitude: 7.463232037 },
  ];

  describe('getCenterOfBounds', () => {
    it('should get the center of bounds for a polygon 🤷', () => {
      expect(geo.getCenterOfBounds(polygon)).toEqual({
        latitude: 51.513791,
        longitude: 7.464047,
      });

      expect(geo.getCenterOfBounds(polygon2)).toEqual({
        latitude: 51.515401,
        longitude: 7.459209,
      });
    });
  });
});

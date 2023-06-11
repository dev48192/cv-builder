export const DEFAULT_OPTIONS = [
    {
      name: "Brightness",
      property: "brightness",
      value: 100,
      range: {
        min: 0,
        max: 200
      },
      unit: "%"
    },
    {
      name: "Contrast",
      property: "contrast",
      value: 100,
      range: {
        min: 0,
        max: 200
      },
      unit: "%"
    },
    {
      name: "Saturation",
      property: "saturate",
      value: 100,
      range: {
        min: 0,
        max: 200
      },
      unit: "%"
    },
    {
      name: "Grayscale",
      property: "grayscale",
      value: 0,
      range: {
        min: 0,
        max: 100
      },
      unit: "%"
    },
    {
      name: "Sepia",
      property: "sepia",
      value: 0,
      range: {
        min: 0,
        max: 100
      },
      unit: "%"
    },
    {
      name: "Hue Rotate",
      property: "hue-rotate",
      value: 0,
      range: {
        min: 0,
        max: 360
      },
      unit: "deg"
    },
    {
      name: "Blur",
      property: "blur",
      value: 0,
      range: {
        min: 0,
        max: 20
      },
      unit: "px"
    }
  ];

  export const KODAK_INITIAL =[
    {
      name: 0,
      value: 110,
    },
    {
      name: 1,
      value: 110,
    },
    {
      name: 3,
      value: 60,
    },
    {
      name: 5,
      value: 25,
    }
  ]
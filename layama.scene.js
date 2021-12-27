// Created with Motiva Layama v1.5 https://www.motivacg.com/layama

function getLayamaCameras()
{
   var layamaCameras = new BABYLON.SmartArray(0);
   layamaCameras.push({n: "360 PLANTA ALTA0000", a: "PhysCamera_Laya_PA_001", p: new BABYLON.Vector3(3772.73, 550, 2485.93), l: new BABYLON.Vector3(3773.24, 550, 2485.08)});
   layamaCameras.push({n: "360 PLANTA ALTA0001", a: "PhysCamera_Laya_PA_002", p: new BABYLON.Vector3(3894.78, 550, 2259.96), l: new BABYLON.Vector3(3894.04, 550, 2259.28)});
   layamaCameras.push({n: "360 PLANTA ALTA0002", a: "PhysCamera_Laya_PA_003", p: new BABYLON.Vector3(3698.64, 550, 2011.26), l: new BABYLON.Vector3(3697.67, 550, 2011.01)});
   layamaCameras.push({n: "360 PLANTA ALTA0003", a: "PhysCamera_Laya_PA_004", p: new BABYLON.Vector3(3615.53, 550, 1742.45), l: new BABYLON.Vector3(3614.66, 550, 1741.94)});
   layamaCameras.push({n: "360 PLANTA ALTA0004", a: "PhysCamera_Laya_PA_005", p: new BABYLON.Vector3(3333, 550, 1544.33), l: new BABYLON.Vector3(3332.19, 550, 1543.74)});
   layamaCameras.push({n: "360 PLANTA ALTA0005", a: "PhysCamera_Laya_PA_006", p: new BABYLON.Vector3(3113.93, 550, 1323.68), l: new BABYLON.Vector3(3113.48, 550, 1322.79)});
   layamaCameras.push({n: "360 PLANTA ALTA0006", a: "PhysCamera_Laya_PA_007", p: new BABYLON.Vector3(2946.96, 550, 1024.02), l: new BABYLON.Vector3(2947.9, 550, 1023.68)});
   layamaCameras.push({n: "360 PLANTA ALTA0007", a: "PhysCamera_Laya_PA_008", p: new BABYLON.Vector3(3057.03, 550, 993.267), l: new BABYLON.Vector3(3057.96, 550, 992.924)});
   layamaCameras.push({n: "360 PLANTA ALTA0008", a: "PhysCamera_Laya_PA_009", p: new BABYLON.Vector3(3285.48, 550, 831.537), l: new BABYLON.Vector3(3285.82, 550, 830.598)});
   layamaCameras.push({n: "360 PLANTA ALTA0009", a: "PhysCamera_Laya_PA_010", p: new BABYLON.Vector3(2926.02, 550, 710.896), l: new BABYLON.Vector3(2925.35, 550, 710.157)});
   layamaCameras.push({n: "360 PLANTA ALTA0010", a: "PhysCamera_Laya_PA_011", p: new BABYLON.Vector3(2735.46, 550, 534.796), l: new BABYLON.Vector3(2735.31, 550, 535.784)});
   layamaCameras.push({n: "360 PLANTA ALTA0011", a: "PhysCamera_Laya_PA_012", p: new BABYLON.Vector3(2679.3, 550, 800.247), l: new BABYLON.Vector3(2678.6, 550, 799.533)});
   layamaCameras.push({n: "360 PLANTA ALTA0012", a: "PhysCamera_Laya_PA_013", p: new BABYLON.Vector3(2626.72, 550, 374.245), l: new BABYLON.Vector3(2627.09, 550, 373.318)});
   layamaCameras.push({n: "360 PLANTA ALTA0013", a: "PhysCamera_Laya_PA_014", p: new BABYLON.Vector3(2656.33, 550, 206.028), l: new BABYLON.Vector3(2655.93, 550, 205.113)});
   layamaCameras.push({n: "360 PLANTA ALTA0014", a: "PhysCamera_Laya_PA_015", p: new BABYLON.Vector3(2497.43, 550, -36.8554), l: new BABYLON.Vector3(2498.24, 550, -37.4512)});
   layamaCameras.push({n: "360 PLANTA ALTA0015", a: "PhysCamera_Laya_PA_016", p: new BABYLON.Vector3(2746.82, 550, -314.098), l: new BABYLON.Vector3(2747.05, 550, -313.126)});
   layamaCameras.push({n: "360 PLANTA ALTA0016", a: "PhysCamera_Laya_PA_017", p: new BABYLON.Vector3(3754.75, 550, 2822.75), l: new BABYLON.Vector3(3754.98, 550, 2821.77)});
   return layamaCameras;
}

function getLayamaResolutions()
{
   var layamaResolutions = new BABYLON.SmartArray(0);
   layamaResolutions.push("2048");
   layamaResolutions.push("1024");
   return layamaResolutions;
}

function getOnScreenLogoUsage()
{
   return 6;
}

function getLayamaControls()
{
   return {defMove: false, defRot: 1, altMove: true, altRot: 2};
}

function getLayamaHotspots()
{
   var layamaHotspots = new BABYLON.SmartArray(0);
   layamaHotspots.push({n: "LayamaHotspot001", m: 0, u: "/hotspots/Láminas_recepción_alta.png", i: "./hotspots/InfoLogo.png", p: new BABYLON.Vector3(3512.09, 430, 1995.03), d: 250});
   layamaHotspots.push({n: "LayamaHotspot002", m: 0, u: "/hotspots/Masajes_coorporales.png", i: "./hotspots/InfoLogo.png", p: new BABYLON.Vector3(3355.04, 405, 634.764), d: 250});
   layamaHotspots.push({n: "LayamaHotspot003", m: 0, u: "/hotspots/Masajes_1_cromo_1.jpg", i: "./hotspots/InfoLogo.png", p: new BABYLON.Vector3(3314.11, 405, 633.178), d: 250});
   layamaHotspots.push({n: "LayamaHotspot004", m: 0, u: "/hotspots/Aromaterapia.png", i: "./hotspots/InfoLogo.png", p: new BABYLON.Vector3(2519.98, 405, 857.437), d: 250});
   layamaHotspots.push({n: "LayamaHotspot005", m: 0, u: "/hotspots/Aromaterapia_cromo_1.jpg", i: "./hotspots/InfoLogo.png", p: new BABYLON.Vector3(2705.4, 405, 971.756), d: 250});
   layamaHotspots.push({n: "LayamaHotspot006", m: 0, u: "/hotspots/Terapias_Orientales.png", i: "./hotspots/InfoLogo.png", p: new BABYLON.Vector3(2965.15, 410, -226), d: 250});
   layamaHotspots.push({n: "LayamaHotspot007", m: 0, u: "/hotspots/Orientales_cromo_02.jpg", i: "./hotspots/InfoLogo.png", p: new BABYLON.Vector3(2917.7, 410, -433.669), d: 250});
   layamaHotspots.push({n: "LayamaHotspot008", m: 0, u: "/hotspots/Orientales_cromo_01.jpg", i: "./hotspots/InfoLogo.png", p: new BABYLON.Vector3(2756.3, 477.718, -119.283), d: 250});
   layamaHotspots.push({n: "LayamaHotspot009", m: 0, u: "/hotspots/", i: "./hotspots/InfoLogo.png", p: new BABYLON.Vector3(2482.64, 739.056, -401.931), d: 250});
   layamaHotspots.push({n: "LayamaHotspot010", m: 0, u: "/hotspots/Masajes_1_cromo_2.jpg", i: "./hotspots/InfoLogo.png", p: new BABYLON.Vector3(3337.21, 553.214, 968.233), d: 250});
   layamaHotspots.push({n: "LayamaHotspot011", m: 0, u: "/hotspots/Aromaterapia_cromo_2.jpg", i: "./hotspots/InfoLogo.png", p: new BABYLON.Vector3(2571.18, 405, 652.279), d: 250});
   layamaHotspots.push({n: "LayamaHotspot012", m: 0, u: "/hotspots/TERAPI_1.png", i: "./hotspots/InfoLogo.png", p: new BABYLON.Vector3(2632, 410, -185.755), d: 250});
   return layamaHotspots;
}


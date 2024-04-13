import * as lwc from '../../js/lib/pkg.mjs';
export const customSeriesDefaultOptions = lwc.customSeriesDefaultOptions;
export var ColorType;
(function (ColorType) {
    ColorType["Solid"] = "solid";
    ColorType["VerticalGradient"] = "gradient";
})(ColorType || (ColorType = {}));
export var CrosshairMode;
(function (CrosshairMode) {
    CrosshairMode[CrosshairMode["Normal"] = 0] = "Normal";
    CrosshairMode[CrosshairMode["Magnet"] = 1] = "Magnet";
    CrosshairMode[CrosshairMode["Hidden"] = 2] = "Hidden";
})(CrosshairMode || (CrosshairMode = {}));
export var LastPriceAnimationMode;
(function (LastPriceAnimationMode) {
    LastPriceAnimationMode[LastPriceAnimationMode["Disabled"] = 0] = "Disabled";
    LastPriceAnimationMode[LastPriceAnimationMode["Continuous"] = 1] = "Continuous";
    LastPriceAnimationMode[LastPriceAnimationMode["OnDataUpdate"] = 2] = "OnDataUpdate";
})(LastPriceAnimationMode || (LastPriceAnimationMode = {}));
export var LineStyle;
(function (LineStyle) {
    LineStyle[LineStyle["Solid"] = 0] = "Solid";
    LineStyle[LineStyle["Dotted"] = 1] = "Dotted";
    LineStyle[LineStyle["Dashed"] = 2] = "Dashed";
    LineStyle[LineStyle["LargeDashed"] = 3] = "LargeDashed";
    LineStyle[LineStyle["SparseDotted"] = 4] = "SparseDotted";
})(LineStyle || (LineStyle = {}));
export var LineType;
(function (LineType) {
    LineType[LineType["Simple"] = 0] = "Simple";
    LineType[LineType["WithSteps"] = 1] = "WithSteps";
    LineType[LineType["Curved"] = 2] = "Curved";
})(LineType || (LineType = {}));
export var MismatchDirection;
(function (MismatchDirection) {
    MismatchDirection[MismatchDirection["NearestLeft"] = -1] = "NearestLeft";
    MismatchDirection[MismatchDirection["None"] = 0] = "None";
    MismatchDirection[MismatchDirection["NearestRight"] = 1] = "NearestRight";
})(MismatchDirection || (MismatchDirection = {}));
export var PriceLineSource;
(function (PriceLineSource) {
    PriceLineSource[PriceLineSource["LastBar"] = 0] = "LastBar";
    PriceLineSource[PriceLineSource["LastVisible"] = 1] = "LastVisible";
})(PriceLineSource || (PriceLineSource = {}));
export var PriceScaleMode;
(function (PriceScaleMode) {
    PriceScaleMode[PriceScaleMode["Normal"] = 0] = "Normal";
    PriceScaleMode[PriceScaleMode["Logarithmic"] = 1] = "Logarithmic";
    PriceScaleMode[PriceScaleMode["Percentage"] = 2] = "Percentage";
    PriceScaleMode[PriceScaleMode["IndexedTo100"] = 3] = "IndexedTo100";
})(PriceScaleMode || (PriceScaleMode = {}));
export var TickMarkType;
(function (TickMarkType) {
    TickMarkType[TickMarkType["Year"] = 0] = "Year";
    TickMarkType[TickMarkType["Month"] = 1] = "Month";
    TickMarkType[TickMarkType["DayOfMonth"] = 2] = "DayOfMonth";
    TickMarkType[TickMarkType["Time"] = 3] = "Time";
    TickMarkType[TickMarkType["TimeWithSeconds"] = 4] = "TimeWithSeconds";
})(TickMarkType || (TickMarkType = {}));
export var TrackingModeExitMode;
(function (TrackingModeExitMode) {
    TrackingModeExitMode[TrackingModeExitMode["OnTouchEnd"] = 0] = "OnTouchEnd";
    TrackingModeExitMode[TrackingModeExitMode["OnNextTap"] = 1] = "OnNextTap";
})(TrackingModeExitMode || (TrackingModeExitMode = {}));
export function createChart(container, options) {
    return lwc.createChart(container, options);
}
export function createChartEx(container, horzScaleBehavior, options) {
    return lwc.createChartEx(container, horzScaleBehavior, options);
}
export function isBusinessDay(time) {
    return lwc.isBusinessDay(time);
}
export function isUTCTimestamp(time) {
    return lwc.isUTCTimestamp(time);
}
export function version() {
    return lwc.version();
}
export var Color;
(function (Color) {
    Color["khaki"] = "#f0e68c";
    Color["azure"] = "#f0ffff";
    Color["aliceblue"] = "#f0f8ff";
    Color["ghostwhite"] = "#f8f8ff";
    Color["gold"] = "#ffd700";
    Color["goldenrod"] = "#daa520";
    Color["gainsboro"] = "#dcdcdc";
    Color["gray"] = "#808080";
    Color["green"] = "#008000";
    Color["honeydew"] = "#f0fff0";
    Color["floralwhite"] = "#fffaf0";
    Color["lightblue"] = "#add8e6";
    Color["lightcoral"] = "#f08080";
    Color["lemonchiffon"] = "#fffacd";
    Color["hotpink"] = "#ff69b4";
    Color["lightyellow"] = "#ffffe0";
    Color["greenyellow"] = "#adff2f";
    Color["lightgoldenrodyellow"] = "#fafad2";
    Color["limegreen"] = "#32cd32";
    Color["linen"] = "#faf0e6";
    Color["lightcyan"] = "#e0ffff";
    Color["magenta"] = "#f0f";
    Color["maroon"] = "#800000";
    Color["olive"] = "#808000";
    Color["orange"] = "#ffa500";
    Color["oldlace"] = "#fdf5e6";
    Color["mediumblue"] = "#0000cd";
    Color["transparent"] = "#0000";
    Color["lime"] = "#0f0";
    Color["lightpink"] = "#ffb6c1";
    Color["mistyrose"] = "#ffe4e1";
    Color["moccasin"] = "#ffe4b5";
    Color["midnightblue"] = "#191970";
    Color["orchid"] = "#da70d6";
    Color["mediumorchid"] = "#ba55d3";
    Color["mediumturquoise"] = "#48d1cc";
    Color["orangered"] = "#ff4500";
    Color["royalblue"] = "#4169e1";
    Color["powderblue"] = "#b0e0e6";
    Color["red"] = "#f00";
    Color["coral"] = "#ff7f50";
    Color["turquoise"] = "#40e0d0";
    Color["white"] = "#fff";
    Color["whitesmoke"] = "#f5f5f5";
    Color["wheat"] = "#f5deb3";
    Color["teal"] = "#008080";
    Color["steelblue"] = "#4682b4";
    Color["bisque"] = "#ffe4c4";
    Color["aquamarine"] = "#7fffd4";
    Color["aqua"] = "#0ff";
    Color["sienna"] = "#a0522d";
    Color["silver"] = "#c0c0c0";
    Color["springgreen"] = "#00ff7f";
    Color["antiquewhite"] = "#faebd7";
    Color["burlywood"] = "#deb887";
    Color["brown"] = "#a52a2a";
    Color["beige"] = "#f5f5dc";
    Color["chocolate"] = "#d2691e";
    Color["chartreuse"] = "#7fff00";
    Color["cornflowerblue"] = "#6495ed";
    Color["cornsilk"] = "#fff8dc";
    Color["crimson"] = "#dc143c";
    Color["cadetblue"] = "#5f9ea0";
    Color["tomato"] = "#ff6347";
    Color["fuchsia"] = "#f0f";
    Color["blue"] = "#00f";
    Color["salmon"] = "#fa8072";
    Color["blanchedalmond"] = "#ffebcd";
    Color["slateblue"] = "#6a5acd";
    Color["slategray"] = "#708090";
    Color["thistle"] = "#d8bfd8";
    Color["tan"] = "#d2b48c";
    Color["cyan"] = "#0ff";
    Color["darkblue"] = "#00008b";
    Color["darkcyan"] = "#008b8b";
    Color["darkgoldenrod"] = "#b8860b";
    Color["darkgray"] = "#a9a9a9";
    Color["blueviolet"] = "#8a2be2";
    Color["black"] = "#000";
    Color["darkmagenta"] = "#8b008b";
    Color["darkslateblue"] = "#483d8b";
    Color["darkkhaki"] = "#bdb76b";
    Color["darkorchid"] = "#9932cc";
    Color["darkorange"] = "#ff8c00";
    Color["darkgreen"] = "#006400";
    Color["darkred"] = "#8b0000";
    Color["dodgerblue"] = "#1e90ff";
    Color["darkslategray"] = "#2f4f4f";
    Color["dimgray"] = "#696969";
    Color["deepskyblue"] = "#00bfff";
    Color["firebrick"] = "#b22222";
    Color["forestgreen"] = "#228b22";
    Color["indigo"] = "#4b0082";
    Color["ivory"] = "#fffff0";
    Color["lavenderblush"] = "#fff0f5";
    Color["feldspar"] = "#d19275";
    Color["indianred"] = "#cd5c5c";
    Color["lightgreen"] = "#90ee90";
    Color["lightgrey"] = "#d3d3d3";
    Color["lightskyblue"] = "#87cefa";
    Color["lightslategray"] = "#789";
    Color["lightslateblue"] = "#8470ff";
    Color["snow"] = "#fffafa";
    Color["lightseagreen"] = "#20b2aa";
    Color["lightsalmon"] = "#ffa07a";
    Color["darksalmon"] = "#e9967a";
    Color["darkviolet"] = "#9400d3";
    Color["mediumpurple"] = "#9370d8";
    Color["mediumaquamarine"] = "#66cdaa";
    Color["skyblue"] = "#87ceeb";
    Color["lavender"] = "#e6e6fa";
    Color["lightsteelblue"] = "#b0c4de";
    Color["mediumvioletred"] = "#c71585";
    Color["mintcream"] = "#f5fffa";
    Color["navajowhite"] = "#ffdead";
    Color["navy"] = "#000080";
    Color["olivedrab"] = "#6b8e23";
    Color["palevioletred"] = "#d87093";
    Color["violetred"] = "#d02090";
    Color["yellow"] = "#ff0";
    Color["yellowgreen"] = "#9acd32";
    Color["lawngreen"] = "#7cfc00";
    Color["pink"] = "#ffc0cb";
    Color["paleturquoise"] = "#afeeee";
    Color["palegoldenrod"] = "#eee8aa";
    Color["darkolivegreen"] = "#556b2f";
    Color["darkseagreen"] = "#8fbc8f";
    Color["darkturquoise"] = "#00ced1";
    Color["peachpuff"] = "#ffdab9";
    Color["deeppink"] = "#ff1493";
    Color["violet"] = "#ee82ee";
    Color["palegreen"] = "#98fb98";
    Color["mediumseagreen"] = "#3cb371";
    Color["peru"] = "#cd853f";
    Color["saddlebrown"] = "#8b4513";
    Color["sandybrown"] = "#f4a460";
    Color["rosybrown"] = "#bc8f8f";
    Color["purple"] = "#800080";
    Color["seagreen"] = "#2e8b57";
    Color["seashell"] = "#fff5ee";
    Color["papayawhip"] = "#ffefd5";
    Color["mediumslateblue"] = "#7b68ee";
    Color["plum"] = "#dda0dd";
    Color["mediumspringgreen"] = "#00fa9a";
})(Color || (Color = {}));

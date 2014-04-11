//设置舞台缩放模式
function LStageScaleMode(){throw "LStageScaleMode cannot be instantiated";}
LStageScaleMode.EXACT_FIT = "exactFit";//:[静态] 指定整个应用程序在指定区域中可见，但不尝试保持原始高宽比。
LStageScaleMode.SHOW_ALL = "showAll";//[静态] 指定整个应用程序在指定区域中可见，且不会发生扭曲，同时保持应用程序的原始高宽比
LStageScaleMode.NO_BORDER = "noBorder";//[静态] 指定整个应用程序填满指定区域，不会发生扭曲，但有可能会进行一些裁切，同时保持应用程序的原始高宽比。
LStageScaleMode.NO_SCALE = "noScale";//[静态] 指定应用程序的大小是固定的，因此，即使在更改播放器窗口大小时，它仍然保持不变。
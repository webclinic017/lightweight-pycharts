import { positionsLine } from '../../helpers/dimensions/positions.js';
import { buttonHeight } from './constants.js';
import { PaneRendererBase } from './renderer-base.js';
export class PriceScalePaneRenderer extends PaneRendererBase {
    draw(target) {
        target.useBitmapCoordinateSpace(scope => {
            if (!this._data)
                return;
            this._drawCrosshairLabel(scope);
        });
    }
    _drawCrosshairLabel(scope) {
        var _a;
        if (!((_a = this._data) === null || _a === void 0 ? void 0 : _a.crosshair))
            return;
        const ctx = scope.context;
        try {
            const width = scope.bitmapSize.width;
            const labelWidth = width - 8 * scope.horizontalPixelRatio;
            ctx.save();
            ctx.beginPath();
            ctx.fillStyle = this._data.color;
            const labelDimensions = positionsLine(this._data.crosshair.y, scope.verticalPixelRatio, buttonHeight);
            const radius = 2 * scope.horizontalPixelRatio;
            ctx.roundRect(0, labelDimensions.position, labelWidth, labelDimensions.length, [0, radius, radius, 0]);
            ctx.fill();
            ctx.beginPath();
            ctx.fillStyle = '#FFFFFF';
            ctx.textBaseline = 'middle';
            ctx.textAlign = 'right';
            ctx.font = `${Math.round(12 * scope.verticalPixelRatio)}px sans-serif`;
            const textMeasurements = ctx.measureText(this._data.crosshair.text);
            ctx.fillText(this._data.crosshair.text, textMeasurements.width + 10 * scope.horizontalPixelRatio, this._data.crosshair.y * scope.verticalPixelRatio);
        }
        finally {
            ctx.restore();
        }
    }
}

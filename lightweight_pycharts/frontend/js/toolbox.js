import { icon_manager, icons } from "./icons.js";
import { LAYOUT_DIM_LEFT, Wrapper_Divs, menu_location, overlay_menu } from "./util.js";
export class toolbox {
    constructor(parent) {
        if (toolbox.instance) {
            return toolbox.instance;
        }
        toolbox.instance = this;
        toolbox.instance.create_toolbar = this.create_toolbar.bind(toolbox.instance);
        this.div = parent.get_div(Wrapper_Divs.DRAW_TOOLS);
        this.div.style.flexDirection = 'column';
        this.overlay_div = parent.div_overlay;
        this.create_toolbar();
        toolbox.loaded = true;
    }
    create_toolbar() {
        if (this.top_div)
            this.top_div.remove();
        if (this.bottom_div)
            this.bottom_div.remove();
        this.top_div = document.createElement('div');
        this.top_div.classList.add('toolbar', 'toolbar_top');
        this.top_div.style.width = `${LAYOUT_DIM_LEFT.WIDTH}px`;
        this.top_div.appendChild(this.crosshair_selector());
        this.top_div.appendChild(this.separator());
        this.top_div.appendChild(this.line_tools_selector());
        this.top_div.appendChild(this.fib_tools_selector());
        this.top_div.appendChild(this.measure_tool_selector());
        this.top_div.appendChild(this.separator());
        this.top_div.appendChild(this.ruler_button());
        this.top_div.appendChild(this.magnet_button());
        this.div.appendChild(this.top_div);
    }
    menu_selector(parent) {
        let menu_sel = document.createElement('div');
        menu_sel.classList.add('toolbar_menu_button', 'icon_hover', 'icon_v_margin');
        menu_sel.style.display = 'none';
        menu_sel.appendChild(icon_manager.get_svg(icons.menu_arrow_ew));
        parent.addEventListener('mouseenter', () => {
            menu_sel.style.display = 'flex';
        });
        parent.addEventListener('mouseleave', () => {
            menu_sel.style.display = 'none';
        });
        return menu_sel;
    }
    crosshair_selector() {
        let selector_div = document.createElement('div');
        selector_div.id = 'crosshair_selector';
        selector_div.classList.add('toolbar', 'toolbar_item');
        let items = [
            { label: 'Cross', icon: icons.cursor_cross },
            { label: 'Dot', icon: icons.cursor_dot },
            { label: 'Arrow', icon: icons.cursor_arrow },
        ];
        selector_div.appendChild(icon_manager.get_svg(items[0].icon, ['icon_v_margin', 'icon_l_margin', 'icon_hover']));
        selector_div.appendChild(this.menu_selector(selector_div));
        overlay_menu(this.overlay_div, selector_div, items, true, 'crosshair_menu', menu_location.TOP_RIGHT);
        return selector_div;
    }
    line_tools_selector() {
        let selector_div = document.createElement('div');
        selector_div.id = 'linetools_selector';
        selector_div.classList.add('toolbar', 'toolbar_item');
        let items = [
            { label: 'Trend Line', icon: icons.trend_line },
            { label: 'Horizontal Ray', icon: icons.horiz_ray },
            { label: 'Horizontal Line', icon: icons.horiz_line },
            { label: 'Vertical Line', icon: icons.vert_line },
            { label: 'Polyline', icon: icons.polyline },
            { label: 'Parallel Channel', icon: icons.channel_parallel },
            { label: 'Disjoint Channel', icon: icons.channel_disjoint },
        ];
        selector_div.appendChild(icon_manager.get_svg(items[0].icon, ['icon_v_margin', 'icon_l_margin', 'icon_hover']));
        selector_div.appendChild(this.menu_selector(selector_div));
        overlay_menu(this.overlay_div, selector_div, items, true, 'linetools_menu', menu_location.TOP_RIGHT);
        return selector_div;
    }
    fib_tools_selector() {
        let selector_div = document.createElement('div');
        selector_div.id = 'fibtools_selector';
        selector_div.classList.add('toolbar', 'toolbar_item');
        let items = [
            { label: 'Fibinachi Retrace', icon: icons.fib_retrace },
            { label: 'Fibinachi Extend', icon: icons.fib_extend },
        ];
        selector_div.appendChild(icon_manager.get_svg(items[0].icon, ['icon_v_margin', 'icon_l_margin', 'icon_hover']));
        selector_div.appendChild(this.menu_selector(selector_div));
        overlay_menu(this.overlay_div, selector_div, items, true, 'fibtools_menu', menu_location.TOP_RIGHT);
        return selector_div;
    }
    measure_tool_selector() {
        let selector_div = document.createElement('div');
        selector_div.id = 'measuretools_selector';
        selector_div.classList.add('toolbar', 'toolbar_item');
        let items = [
            { label: 'Price Range', icon: icons.range_price },
            { label: 'Date Range', icon: icons.range_date },
            { label: 'Price and Date Meaure', icon: icons.range_price_date },
            { label: 'Bars Pattern', icon: icons.bar_pattern },
            { label: 'Bar Ghost Feed', icon: icons.bar_ghost_feed },
        ];
        selector_div.appendChild(icon_manager.get_svg(items[0].icon, ['icon_v_margin', 'icon_l_margin', 'icon_hover']));
        selector_div.appendChild(this.menu_selector(selector_div));
        overlay_menu(this.overlay_div, selector_div, items, true, 'measuretools_menu', menu_location.TOP_RIGHT);
        return selector_div;
    }
    ruler_button() {
        let selector_div = document.createElement('div');
        selector_div.id = 'measuretools_selector';
        selector_div.classList.add('toolbar', 'toolbar_item');
        selector_div.appendChild(icon_manager.get_svg(icons.ruler, ['icon_v_margin', 'icon_l_margin', 'icon_hover']));
        return selector_div;
    }
    magnet_button() {
        let selector_div = document.createElement('div');
        selector_div.id = 'measuretools_selector';
        selector_div.classList.add('toolbar', 'toolbar_item');
        selector_div.appendChild(icon_manager.get_svg(icons.magnet, ['icon_v_margin', 'icon_l_margin', 'icon_hover']));
        return selector_div;
    }
    separator() {
        let new_div = document.createElement('div');
        new_div.classList.add('toolbar_separator');
        new_div.style.width = `${LAYOUT_DIM_LEFT.WIDTH - 2 * LAYOUT_DIM_LEFT.H_BUFFER}px`;
        new_div.style.margin = `${LAYOUT_DIM_LEFT.V_BUFFER}px ${LAYOUT_DIM_LEFT.H_BUFFER}px`;
        return new_div;
    }
}
toolbox.loaded = false;

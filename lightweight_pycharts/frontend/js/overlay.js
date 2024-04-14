import { icon_manager, icons } from "./icons.js";
export var menu_location;
(function (menu_location) {
    menu_location[menu_location["TOP_RIGHT"] = 0] = "TOP_RIGHT";
    menu_location[menu_location["TOP_LEFT"] = 1] = "TOP_LEFT";
    menu_location[menu_location["BOTTOM_RIGHT"] = 2] = "BOTTOM_RIGHT";
})(menu_location || (menu_location = {}));
export class overlay_manager {
    constructor() {
        if (overlay_manager.instance) {
            this.div = document.createElement('div');
            return overlay_manager.instance;
        }
        this.div = document.createElement('div');
        this.div.id = 'overlay_manager';
        this.div.classList.add('overlay_manager');
        document.body.appendChild(this.div);
        overlay_manager.instance = this;
    }
    static menu(parent_div, items, update_icon, id, loc) {
        if (items.length === 0)
            return;
        let overlay_menu = document.createElement('div');
        overlay_menu.id = id + '_menu';
        overlay_menu.classList.add('overlay_menu');
        let menu_loc_func = overlay_manager.menu_position_func(loc, overlay_menu, parent_div);
        parent_div.addEventListener('click', () => {
            if (overlay_menu.classList.contains('overlay_menu_active'))
                overlay_menu.classList.remove('overlay_menu_active');
            else {
                overlay_menu.classList.add('overlay_menu_active');
                menu_loc_func();
            }
        });
        document.addEventListener('mousedown', () => {
            overlay_menu.classList.remove('overlay_menu_active');
        });
        parent_div.addEventListener('mousedown', (event) => { event.stopPropagation(); });
        overlay_menu.addEventListener('mousedown', (event) => { event.stopPropagation(); });
        let sub_menu = document.createElement('div');
        sub_menu.classList.add('overlay_sub_menu');
        sub_menu.style.display = 'flex';
        items.forEach((item, i) => {
            if (item.separator) {
                if (i !== 0) {
                    overlay_menu.appendChild(sub_menu);
                    sub_menu = document.createElement('div');
                    sub_menu.classList.add('overlay_sub_menu');
                }
                sub_menu.style.display = item.separator_vis ? 'flex' : 'none';
                overlay_menu.appendChild(overlay_manager.make_separator(sub_menu, item));
            }
            else {
                sub_menu.appendChild(overlay_manager.make_item(item, overlay_menu, parent_div, update_icon));
            }
        });
        overlay_menu.appendChild(sub_menu);
        overlay_manager.instance.div.appendChild(overlay_menu);
    }
    static make_separator(sub_menu, item) {
        var _a;
        let title_bar = document.createElement('div');
        title_bar.classList.add('menu_item', 'overlay_menu_separator');
        let text = document.createElement('span');
        text.classList.add('overlay_sub_menu_text');
        text.innerHTML = item.label.toUpperCase();
        title_bar.appendChild(text);
        if ((_a = item.separator_vis) !== null && _a !== void 0 ? _a : true) {
            sub_menu.style.display = 'flex';
            title_bar.appendChild(icon_manager.get_svg(icons.menu_arrow_ns));
        }
        else {
            sub_menu.style.display = 'none';
            title_bar.appendChild(icon_manager.get_svg(icons.menu_arrow_sn));
        }
        title_bar.addEventListener('click', () => {
            let svg = title_bar.getElementsByTagName('svg')[0];
            if (sub_menu.style.display === 'flex') {
                sub_menu.style.display = 'none';
                svg.replaceWith(icon_manager.get_svg(icons.menu_arrow_sn));
            }
            else {
                sub_menu.style.display = 'flex';
                svg.replaceWith(icon_manager.get_svg(icons.menu_arrow_ns));
            }
        });
        return title_bar;
    }
    static make_item(item, menu, parent_div, update_icon) {
        let item_div = document.createElement('div');
        item_div.classList.add('menu_item');
        let sel_wrap = document.createElement('span');
        sel_wrap.classList.add('menu_selectable');
        if (item.icon)
            sel_wrap.appendChild(icon_manager.get_svg(item.icon));
        let text = document.createElement('span');
        text.classList.add('menu_text');
        text.innerHTML = item.label;
        sel_wrap.appendChild(text);
        item_div.appendChild(sel_wrap);
        if (item.star)
            this.make_toggle_star(item_div, item);
        sel_wrap.addEventListener('click', () => {
            menu.classList.remove('overlay_menu_active');
            if (update_icon) {
                if (item.icon) {
                    let old_icon = parent_div.firstElementChild;
                    old_icon.replaceWith(icon_manager.get_svg(item.icon, old_icon.classList.toString().split(" ")));
                }
                else {
                }
            }
            if (item.func)
                item.func();
        });
        return item_div;
    }
    static menu_position_func(location, overlay_menu_div, parent_div) {
        let set_menu_loc = () => { };
        switch (location) {
            case (menu_location.BOTTOM_RIGHT):
                {
                    set_menu_loc = () => {
                        overlay_menu_div.style.top = `${Math.max(parent_div.getBoundingClientRect().bottom + 1, 0)}px`;
                        overlay_menu_div.style.left = `${Math.max(parent_div.getBoundingClientRect().right - overlay_menu_div.getBoundingClientRect().width, 0)}px`;
                    };
                }
                break;
            case (menu_location.TOP_LEFT):
                {
                    set_menu_loc = () => {
                        overlay_menu_div.style.top = `${Math.max(parent_div.getBoundingClientRect().top, 0)}px`;
                        overlay_menu_div.style.right = `${Math.max(parent_div.getBoundingClientRect().left - 1, 0)}px`;
                    };
                }
                break;
            case (menu_location.TOP_RIGHT):
                {
                    set_menu_loc = () => {
                        overlay_menu_div.style.top = `${Math.max(parent_div.getBoundingClientRect().top, 0)}px`;
                        overlay_menu_div.style.left = `${Math.max(parent_div.getBoundingClientRect().right + 1, 0)}px`;
                    };
                }
                break;
        }
        return set_menu_loc;
    }
    static make_toggle_star(parent_div, item) {
        let wrapper = document.createElement('div');
        wrapper.classList.add('menu_item_star');
        let icon = icon_manager.get_svg(icons.star, ["icon_hover", "icon_hidden"]);
        if (item.star_selected)
            icon.classList.add('star_active');
        wrapper.appendChild(icon);
        parent_div.addEventListener('mouseenter', () => { wrapper.firstChild.style.visibility = 'visible'; });
        parent_div.addEventListener('mouseleave', () => {
            let icon = wrapper.firstChild;
            if (!icon.classList.contains('star_active')) {
                icon.style.visibility = 'hidden';
            }
        });
        wrapper.addEventListener('mousedown', (event) => { event.stopPropagation(); });
        wrapper.addEventListener('click', () => {
            let icon = wrapper.firstChild;
            if (icon.classList.contains('star_active')) {
                icon.replaceWith(icon_manager.get_svg(icons.star, ["icon_hover"]));
                icon = wrapper.firstChild;
                icon.style.visibility = 'hidden';
                if (item.star_deact)
                    item.star_deact();
            }
            else {
                icon.replaceWith(icon_manager.get_svg(icons.star_filled, ["star_active", "icon_hover"]));
                icon = wrapper.firstChild;
                icon.style.color = 'var(--star-active-color)';
                if (item.star_act)
                    item.star_act();
            }
        });
        parent_div.appendChild(wrapper);
    }
}

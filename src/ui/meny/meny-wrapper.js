import { UIElement } from 'ziko/ui'
import { 
    prefix,
    add_class,
    remove_class
 } from './utils/index.js'
import {
	setup_positions
} from './setup/index.js'
class UIMenyWrapper extends UIElement {
    static POSITION_T = 'top';
	static POSITION_R = 'right';
	static POSITION_B = 'bottom';
	static POSITION_L = 'left';
    constructor(meny, contents, {
			width= 300,
			height= 300,
			position= UIMenyWrapper.POSITION_L,
			threshold= 40,
			angle= 30,
			overlap= 6,
			transitionDuration= '0.5s',
			transitionEasing= 'ease',
			gradient= 'rgba(0,0,0,0.20) 0%, rgba(0,0,0,0.65) 100%)',		
	}= {}
    ){
        super({element : 'div', name : 'meny-wrapper'})
        this.meny = meny.style({
				opacity : 0
		});
		add_class(this.meny.element, 'zextra-meny')
        this.contents = contents
        this.cover = null
        this.dom = {
            menu : meny.element,
            contents : contents.element,
            wrapper : this.element
        }
		this.append(meny, contents)
        Object.assign(this.cache, {
			config : {
				width,
				height,
				position,
				threshold,
				angle,
				overlap,
				transitionDuration,
				transitionEasing,
				gradient,
			},
			state : {
				is_open : false,
			},
			transform : {
				menu_origin : '',
				menu_closed : '',
				menu_opened : '',
				contents_origin : '',
				contents_closed : '',
				contents_opend : ''
			}})
        this.originalStyles = {};
		this.init();
    }
    init() {
		setup_positions.call(this)
		this.setupWrapper();
		this.setupCover();
		this.setupMenu();
		this.setupContents();
	}
    setupWrapper() {
		add_class(this.dom.wrapper, `zextra-meny-${this.cache.config.position}`);
		this.originalStyles.wrapper = this.dom.wrapper.style.cssText;
		this.dom.wrapper.style[prefix('perspective')] = '800px';
		this.dom.wrapper.style[prefix('perspectiveOrigin')] = this.cache.transform.contents_origin;
	}
	setupCover() {
		if(this.dom.cover) this.dom.cover.parentNode.removeChild(this.dom.cover);
		this.dom.cover = document.createElement('div');
		Object.assign(this.dom.cover.style, {
			position: 'absolute',
			display: 'block',
			width: '100%',
			height: '100%',
			left: '0',
			top: '0',
			zIndex: '1000',
			visibility: 'hidden',
			opacity: '0',
			[prefix('transition')] : `all ${this.cache.config.transitionDuration} ${this.cache.config.transitionEasing}`

		});
		this.dom.contents.appendChild(this.dom.cover);
	}
	setupMenu() {
		switch(this.cache.config.position) {
			case UIMenyWrapper.POSITION_T: Object.assign(this.dom.menu.style, {
				width : '100%',
				height : `${this.cache.config.height}px`
			}); break;
			case UIMenyWrapper.POSITION_R: Object.assign(this.dom.menu.style, {
				right : '0',
				width : `${this.cache.config.width}px`,
				height : '100%'
			}); break;
			case UIMenyWrapper.POSITION_B: Object.assign(this.dom.menu.style, {
				bottom : '0',
				width : '100%',
				height : `${this.cache.config.height}px`
			}); break;
			case UIMenyWrapper.POSITION_L: Object.assign(this.dom.menu.style,{
				width : `${this.cache.config.width}px`,
				height : '100%'
			}); break;
		}
		this.originalStyles.menu = this.dom.menu.style.cssText;
		Object.assign(this.dom.menu.style, {
			position: 'fixed',
			display: 'block',
			zIndex: '1'
		});
		this.dom.menu.style[prefix('transform')] = this.cache.transform.menu_closed;
		this.dom.menu.style[prefix('transformOrigin')] = this.cache.transform.menu_origin;
		this.dom.menu.style[prefix('transition')] = `all ${this.cache.config.transitionDuration} ${this.cache.config.transitionEasing}`;
	}
	setupContents() {
		const style = this.dom.contents.style;
		this.originalStyles.contents = style.cssText;
		Object.assign(this.dom.contents.style,{
			[prefix('transform')] : this.cache.transform.contents_closed,
			[prefix('transformOrigin')] : this.cache.transform.contents_origin,
			[prefix('transition')] : `all ${this.cache.config.transitionDuration} ${this.cache.config.transitionEasing}`
		})
	}
	open() {
		if(!this.isOpen()) {
			this.cache.state.is_open = true;
			add_class(this.dom.wrapper, 'zextra-meny-active');
			this.dom.cover.style.height = `${this.dom.contents.scrollHeight}px`;
			this.dom.cover.style.visibility = 'visible';
			this.dom.cover.style.opacity = '1';
			this.dom.contents.style[prefix('transform')] = this.cache.transform.contents_opened;
			this.dom.menu.style[prefix('transform')] = this.cache.transform.menu_opened;

			this.meny.style({
				opacity : 1
			})
		}
	}
	close() {
		if(this.isOpen()) {
			this.cache.state.is_open = false;
			remove_class(this.dom.wrapper, 'zextra-meny-active');
			this.dom.cover.style.visibility = 'hidden';
			this.dom.cover.style.opacity = '0';
			this.dom.contents.style[prefix('transform')] = this.cache.transform.contents_closed;
			this.dom.menu.style[prefix('transform')] = this.cache.transform.menu_closed;

			this.meny.style({
				opacity : 0
			})
		}
	}
	toggle(){
		this.isOpen() ? this.close() : this.open();
		return this;
	}
	isOpen() {
		return this.cache.state.is_open;
	}
    
}
const MenyWrapper = (meny, contents, options) => new UIMenyWrapper(meny, contents, options)
export{
    UIMenyWrapper,
    MenyWrapper
}
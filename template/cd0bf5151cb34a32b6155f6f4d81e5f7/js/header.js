var t = 0;
var h = 0;
var ct = 0;
var b = 0;
var header, headerContainer, headerSearchCart, topBar, body, headerHeight, LastScrollVal, headerVal, contactInfo, socialIconInnerParent, socialIconParent, headerSearchCartPositionResponsive, headerSearchCartPositionNonResponsive, topbBarInfoPosition, menuParent, portal, brandingInfo, portalResponsive, portalNonResponsive, mobileHeaderStyle;
var scrollTopVal, headercontainerHeight, bannerLi, bannerBaseHeader, bannerArrowClass,darkHeader,responsiveSearchCartContainer,bannerThemecontainer,themeContentContainer,themeHeaderSixRes,themeHeaderSixResHeight,themeLogo,themeLogoHeight,themeLogoWidth,themeLogoHeightSlice,themeLogoWidthSlice,themeCurrencyList,themeCurrencyRes,themeCurrencyNonRes,themeSidebarContent,themeSidebarContentContainer,themeSidebarMobileContentContainer,hasHeaderSeven,langContainer,langNonResContainer,langResContainer,displayMode,currencyListUl,pageContainer;

function removeClass(element, className) {
    element && (element.className = element.className.replace(new RegExp(className, 'g'), ''));
}

function addClass(element, className) {
    element && element.classList.add(className);
}

function VariableInit() {
    headerSearchCartPositionResponsive = document.querySelectorAll('[data-search-cart-position-responsive="zptheme-search-cart-position-responsive"]')[0];
    headerSearchCart = document.querySelectorAll('[data-theme-search-cart-group="zptheme-search-cart-group"]')[0];
    headerSearchCartPositionNonResponsive = document.querySelectorAll('[data-search-cart-position-non-responsive="zptheme-search-cart-position-non-responsive"]')[0];
    topbBarInfoPosition = document.querySelectorAll('[data-topbarinfo-position="zptheme-topbarinfo-position"]')[0];
    contactInfo = document.querySelectorAll('[data-contact-info="zptheme-contact-info"]')[0];
    menuParent = document.querySelectorAll('[data-non-res-menu="zptheme-menu-non-res"]')[0];
    socialIconParent = document.querySelectorAll('[data-socialicon-parent="zptheme-socialicon-parent"]')[0];
    socialIconInnerParent = document.querySelectorAll('[data-socialicon-inner-parent="zptheme-socialicon-inner-parent"]')[0];
    portal = document.querySelectorAll('[data-theme-portal="zptheme-portal"]')[0];
    topBar = document.querySelectorAll('[data-theme-topbar="zptheme-topbar"]')[0];
    brandingInfo = document.querySelectorAll('[data-theme-branding-info="zptheme-branding-info"]')[0];
    header = document.querySelectorAll('[data-header="zptheme-data-header"]')[0] || document.querySelectorAll('[data-header="zptheme-data-header-transparent"]')[0] || document.querySelectorAll('[data-header="none"]')[0];
    headerContainer = document.querySelectorAll('[data-headercontainer="zptheme-data-headercontainer"]')[0];
    portal = document.querySelectorAll('[data-theme-portal="zptheme-portal"]')[0];
    portalResponsive = document.querySelectorAll('[data-theme-portal-responsive="zptheme-portal-responsive"]')[0];
    portalNonResponsive = document.querySelectorAll('[data-theme-portal-non-responsive="zptheme-portal-non-responsive"]')[0];
    verticalMmenu = document.querySelectorAll('[data-theme-vertical-menu="zptheme-vertical-menu"]')[0];

    themeCurrencyList = document.querySelectorAll('[data-theme-currency-list-container]')[0];
    themeCurrencyRes = document.querySelectorAll('[data-theme-currency-placeholder-res]')[0];
    themeCurrencyNonRes = document.querySelectorAll('[data-theme-currency-placeholder-non-res]')[0];

    langContainer = $D.get('[data-theme-lang-container]');
    langNonResContainer = $D.get('[data-theme-lang-container-non-res]');
    langResContainer = $D.get('[data-theme-lang-container-res]');

    body = document.getElementsByTagName("body")[0];
    header = document.querySelectorAll('[data-header="zptheme-data-header"]')[0] || document.querySelectorAll('[data-header="zptheme-data-header-transparent"]')[0] || document.querySelectorAll('[data-header="none"]')[0];
    if(!header){
      return;
    }
    headerVal = header.getAttribute("data-header").trim();
    headerHeight = header.clientHeight;
    headerContainer = document.querySelectorAll('[data-headercontainer="zptheme-data-headercontainer"]')[0];
    if(!headerContainer){
      return;
    }
    headercontainerHeight = headerContainer.clientHeight;
    scrollTopVal = headercontainerHeight - headerHeight;

    // VARIABLE FOR BANNER BASE HEADER TEXT COLOR

    bannerBaseHeader = document.querySelectorAll('[data-banner-base-header="theme-banner-base-header"]');
    bannerLi = document.querySelectorAll('[data-element-type="heroslide"]');
    hero = document.querySelector('.zphero')

    // VARIABLE FOR BANNER BASE HEADER TEXT COLOR END

    responsiveSearchCartContainer = document.querySelectorAll('[data-theme-responsive-search-cart]')[0];
    responsiveSearchCartTopbar = document.querySelectorAll('[data-theme-responsive-search-cart-topbar]')[0];

    searchCartScrollPosition = document.querySelectorAll('[data-search-cart-scrollposition-non-responsive="zptheme-search-cart-scrollposition-non-responsive"]')[0];

    bannerThemecontainer = document.querySelectorAll('[data-themebanner="zptheme-banner"]')[0];

    themeContentContainer = document.querySelectorAll('[data-theme-content-container="theme-content-container"]')[0];

    themeHeaderSixRes = document.querySelectorAll('[data-theme-header-six-res="theme-header-six-res"]')[0];

    if(themeHeaderSixRes){
    	themeHeaderSixResHeight = themeHeaderSixRes.clientHeight;
    }

    themeLogo = document.querySelectorAll('[data-zs-logo]')[0];
    if(themeLogo){
      themeLogoHeight = themeLogo.style.height;
      themeLogoHeightSlice = Number(themeLogoHeight.slice(0,-2));
    	themeLogoWidth = themeLogo.style.width;
      themeLogoWidthSlice = Number(themeLogoWidth.slice(0,-2));
    }

    // HEADER STYLE 07

    hasHeaderSeven = headerContainer.classList.contains('zpheader-style-07');


    // SIDEBAR VARIABLES

    themeSidebarContent = $D.get('[data-theme-sidebar-content]');
    themeSidebarContentContainer = $D.get('[data-theme-sidebar-content-container]');
    themeSidebarMobileContentContainer = $D.get('[data-theme-sidebar-mobile-content-container]');

    mobileHeaderStyle = $D.get('[data-zs-mobile-headerstyle]')
    if(mobileHeaderStyle){
        mobileHeaderStyle = mobileHeaderStyle.getAttribute("data-zs-mobile-headerstyle");
    }

    currencyListUl = document.querySelector('[data-theme-currency-list-ul]');
    pageContainer = document.querySelector('.page-container');
}

// 	ONSCROLL HEADER EFFECT
function responsivechanges() {
    if (!body) {
        VariableInit();
    }
    if(!headerContainer){
      return;
    }
    var offsetValLoad = window.pageYOffset;

    if (document.documentElement.clientWidth > 992) {
        if (topBar) {
          topBar.removeAttribute('style');
        }
        if(hasHeaderSeven && topBar && portal && headerSearchCart){
            if (portal.classList.contains('theme-portal-icon-enabled')) {
                headerSearchCart.prepend(portal);
            }
        }
        if (headerSearchCartPositionResponsive) {
            headerSearchCartPositionResponsive.innerHTML = '';
        }
        if (menuParent && menuParent.parentNode == contactInfo) {
            menuParent.removeChild(contactInfo);
        }
        if (contactInfo && contactInfo.parentNode == socialIconInnerParent) {
            contactInfo.removeChild(socialIconInnerParent);
        }
        if (socialIconParent) {
            socialIconParent.appendChild(socialIconInnerParent);
            var socialIconMoreBtn = document.querySelectorAll('[data-more-socialicon-parent]')[0];
            if (socialIconMoreBtn) {
                $D.append(socialIconParent, socialIconMoreBtn);
            }
        }
        if (headerSearchCart && headerSearchCartPositionNonResponsive) {
            headerSearchCartPositionNonResponsive.appendChild(headerSearchCart);
        }
        if(responsiveSearchCartContainer && headerSearchCart){
          responsiveSearchCartContainer.innerHTML = "";
        }
        if(headerContainer.className.indexOf('zpheader-style-02') >= 0 || headerContainer.className.indexOf('zpheader-style-03') >= 0){
          if(offsetValLoad < scrollTopVal && headerSearchCart && headerSearchCartPositionNonResponsive){
            headerSearchCartPositionNonResponsive.appendChild(headerSearchCart);
          }
          else if(menuParent && offsetValLoad > scrollTopVal && headerSearchCart && searchCartScrollPosition && header.className.indexOf('theme-header-animate') > -1){
            searchCartScrollPosition.appendChild(headerSearchCart);
          }
        }
        if (contactInfo || contactInfo && !menuParent) {
            topbBarInfoPosition.appendChild(contactInfo);
        }
        if (topBar && headerContainer.className.indexOf('zpheader-style-05') == -1) {
            addClass(topBar, 'theme-topbar-not-in-header-05');
        }
        if (portal && portalResponsive) {
            portalResponsive.innerHTML = '';
        }
        if (portalNonResponsive) {
            portalNonResponsive.appendChild(portal);
        }
        if (!menuParent && !brandingInfo && headerSearchCart) {
          header.setAttribute('style', 'display:flex');
        }
        if(bannerThemecontainer){
          bannerThemecontainer.style.marginTop = '0px';
        }
        if(themeContentContainer){
          themeContentContainer.style.marginTop = '0px';
        }
        if(menuParent){
        	menuParent.style.maxHeight = "none";
        }
        if(themeCurrencyList && themeCurrencyNonRes){
          themeCurrencyNonRes.appendChild(themeCurrencyList);
        }
        if(themeSidebarContent && themeSidebarMobileContentContainer){
          themeSidebarContentContainer.appendChild(themeSidebarContent);
        }
        removeClass(body,'theme-body-overflowhidden');
    } else {
        if (topBar && (!headerSearchCart && !portal)) {
            topBar.setAttribute('style', 'display:none');
        }
        if(hasHeaderSeven && topBar && portal){
            if (topBar.querySelector('.zpcontainer') && portal.classList.contains('theme-portal-icon-enabled')) {
                topBar.querySelector('.zpcontainer').appendChild(portal);
            }
        }
        if ((topBar && headerSearchCart && headerSearchCartPositionResponsive && (headerSearchCart.parentElement !== headerSearchCartPositionResponsive)) || (headerSearchCart && verticalMmenu && headerSearchCartPositionResponsive && (headerSearchCart.parentElement !== headerSearchCartPositionResponsive)) || (hasHeaderSeven && headerSearchCart && headerSearchCartPositionResponsive && (headerSearchCart.parentElement !== headerSearchCartPositionResponsive))) {
            headerSearchCartPositionResponsive.appendChild(headerSearchCart);
        }
        if(responsiveSearchCartContainer && headerSearchCart && !topBar && (headerSearchCart.parentElement !== responsiveSearchCartContainer)){
          responsiveSearchCartContainer.appendChild(headerSearchCart);
        }
        if(responsiveSearchCartContainer && headerSearchCart && topBar){
          addClass(responsiveSearchCartTopbar, 'theme-hide-responsive-topbar');
        } else if(responsiveSearchCartContainer && headerSearchCart && !topBar){
          removeClass(responsiveSearchCartTopbar, 'theme-hide-responsive-topbar');
        }
        if (contactInfo && menuParent) {
            menuParent.appendChild(contactInfo);
        }
        if ((contactInfo && socialIconInnerParent) && menuParent) {
            contactInfo.appendChild(socialIconInnerParent);

        } else if ((!contactInfo && socialIconInnerParent) && menuParent) {
            menuParent.appendChild(socialIconInnerParent);
        }
        if (headerSearchCartPositionResponsive && headerSearchCartPositionNonResponsive && topBar || headerSearchCartPositionNonResponsive && verticalMmenu) {
            headerSearchCartPositionNonResponsive.innerHTML = '';
        }
        if (!menuParent && !brandingInfo && headerSearchCart && mobileHeaderStyle != '02') {
            header.setAttribute('style', 'display:none');
        }
        if (portal && portalResponsive) {
            portalResponsive.appendChild(portal);
        }
        if(themeCurrencyList && themeCurrencyRes){
          themeCurrencyRes.appendChild(themeCurrencyList);
        }
        if(themeSidebarContent && themeSidebarMobileContentContainer){
          themeSidebarMobileContentContainer.appendChild(themeSidebarContent);
        }
        var deviceWidth = document.documentElement.clientWidth/2;
        var deviceHeight = document.documentElement.clientHeight/2;
        if(themeLogo && themeLogoHeightSlice >= deviceHeight || themeLogo && themeLogoWidthSlice >= deviceWidth){
            addClass(themeLogo,'mobileLogoAuto');
        }
        if(menuParent){
        	menuParent.style.maxHeight = "";
        }
    }
}

function fullBannerHeaderColor(){
  if(hero){
    bannerBaseHeaderLength = bannerBaseHeader.length;
    bannerLiLength = bannerLi.length;
    var hasHeaderSix = headerContainer.classList.contains('zpheader-style-06');
    var hasHeaderTwo = headerContainer.classList.contains('zpheader-style-02');
    var arrowContainer = document.getElementsByClassName('zsslider-arrows-container');
    if (headerContainer.className.indexOf('theme-header-fixed') > 0 && hasHeaderSix == false && document.documentElement.clientWidth > 992) {
        for (bl = 0; bl < bannerLiLength; bl++) {
            if (bannerLi[bl].className.indexOf('zpdark-section') > -1 && bannerLi[bl].className.indexOf('curslide') > -1) {
                for (bh = 0; bh < bannerBaseHeaderLength; bh++) {
                    addClass(bannerBaseHeader[bh], 'zpdark-header-portion');
                }
                if (topBar) {
                    addClass(topBar, 'zpdark-header-portion');
                }
            } else if ((bannerLi[bl].className.indexOf('zpdefault-section') > -1 && bannerLi[bl].className.indexOf('curslide') > -1) || (bannerLi[bl].className.indexOf('zplight-section') > -1 && bannerLi[bl].className.indexOf('curslide') > -1)) {
                for (bh = 0; bh < bannerBaseHeaderLength; bh++) {
                    removeClass(bannerBaseHeader[bh], 'zpdark-header-portion');
                }
                if (topBar && topBar.className.indexOf('zpdark-header-portion') > -1) {
                    removeClass(topBar, 'zpdark-header-portion');
                }
            }
        }
    }

    for(ac=0;ac<arrowContainer.length;ac++){
       var arrowSvg = arrowContainer[ac].getElementsByTagName('svg');
       for(asv=0;asv<arrowSvg.length;asv++){
           for (blsvg = 0; blsvg < bannerLiLength; blsvg++) {
               if (bannerLi[blsvg].className.indexOf('zpdefault-section') > -1 && bannerLi[blsvg].className.indexOf('curslide') > -1 || bannerLi[blsvg].className.indexOf('zplight-section') > -1 && bannerLi[blsvg].className.indexOf('curslide') > -1) {
                arrowSvg[asv].style.fill = '#404040';
               }
               if (bannerLi[blsvg].className.indexOf('zpdark-section') > -1 && bannerLi[blsvg].className.indexOf('curslide') > -1){
                arrowSvg[asv].style.fill = '#fff';
               }
           }
       }
     }
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
    displayMode = displayMode();
    if(displayMode.isWebView){
        document.body.setAttribute('data-zs-display-mode','webview');
    }
    responsivechanges();
    if(!headerContainer){
      return;
    }

    fullBannerHeaderColor();

   // MENU EVENT LISTENER

     var menu = document.querySelector('[data-zp-theme-menu]');
     if(menu){
       menu.addEventListener('zsMenu:burgerIcon:open', onMobileMenuOpen);
       menu.addEventListener('zsMenu:orientationchange', onMobileMenuOpen);
       function onMobileMenuOpen() {
            var currencyListClick = document.querySelector('[data-theme-currency-list-container]');
            var headercontainerHeightplus = headerContainer.clientHeight + 20;
            var viewheight = document.documentElement.clientHeight;
            var maxHeight = viewheight - headercontainerHeightplus;
            if(themeHeaderSixRes){
              var themeHeaderSixResHeightPlus =  themeHeaderSixRes.clientHeight + 20;
              var maxHeight = viewheight - themeHeaderSixResHeightPlus;
            }
           body.setAttribute('data-theme-menu-max-height',maxHeight);
           addClass(body,'theme-body-overflowhidden');
           var menucloseid = document.getElementById('themeMenuAnimateEnd');
           if(menucloseid){
           	menucloseid.parentElement.removeChild(menucloseid);
           }

           var menuAnimateStyle = document.createElement('style');
           menuAnimateStyle.id = "themeMenuAnimate";
           menuAnimateStyle.type = "text/css";
           var cssText = document.createTextNode('.theme-responsive-menu-area.theme-navigation-and-icons .theme-menu-area .theme-menu.theme-toggle-animate{max-height: '+maxHeight+'px;-webkit-animation: toggleAnimate 0.2s linear 1; -moz-animation: toggleAnimate 0.2s linear 1; -ms-animation: toggleAnimate 0.2s linear 1; -o-animation: toggleAnimate 0.2s linear 1; animation: toggleAnimate 0.2s linear 1;} @-webkit-keyframes toggleAnimate { from { max-height: 0px; } } @-moz-keyframes toggleAnimate { from { max-height: 0px; } } @-ms-keyframes toggleAnimate { from { max-height: 0px; } } @-o-keyframes toggleAnimate { from { max-height: 0px; } } @keyframes toggleAnimate { from { max-height: 0px; } }');
           menuAnimateStyle.appendChild(cssText);
           document.getElementsByTagName('head')[0].appendChild(menuAnimateStyle);
           if(currencyListClick){
            currencyListClick.removeEventListener('click',openCurrency);
           	currencyListClick.addEventListener('click',openCurrency);
           }
       }

       menu.addEventListener('zsMenu:burgerIcon:close', function onMobileMenuClose() {
           removeClass(body,'theme-body-overflowhidden');
           var maxHeight = body.getAttribute('data-theme-menu-max-height');
           var menuAnimateEndStyle = document.createElement('style');
           menuAnimateEndStyle.id = "themeMenuAnimateEnd";
           menuAnimateEndStyle.type = "text/css";
           var cssText = document.createTextNode('.theme-responsive-menu-area.theme-navigation-and-icons .theme-menu-area .theme-menu.theme-toggle-animate-end{max-height:0px;-webkit-animation: toggleAnimateEnd 0.2s linear 1; -moz-animation: toggleAnimateEnd 0.2s linear 1; -ms-animation: toggleAnimateEnd 0.2s linear 1; -o-animation: toggleAnimateEnd 0.2s linear 1; animation: toggleAnimateEnd 0.2s linear 1;} @-webkit-keyframes toggleAnimateEnd { from { max-height: '+maxHeight+'px; visibility: visible; } } @-moz-keyframes toggleAnimateEnd { from { max-height: '+maxHeight+'px; visibility: visible; } } @-ms-keyframes toggleAnimateEnd { from { max-height: '+maxHeight+'px; visibility: visible; } } @-o-keyframes toggleAnimateEnd { from { max-height: '+maxHeight+'px; visibility: visible; } } @keyframes toggleAnimateEnd { from { max-height: '+maxHeight+'px; visibility: visible; } }');
           menuAnimateEndStyle.appendChild(cssText);
           document.getElementsByTagName('head')[0].appendChild(menuAnimateEndStyle);

           var menuopenid = document.getElementById('themeMenuAnimate');
           if(menuopenid){
           	menuopenid.parentElement.removeChild(menuopenid);
           }
       });
     }

    // BANNER BASED HEADER TEXT COLOR STARTS

    if (hero) {
        hero.addEventListener('sliderActive:changed', function(e) {
            var data = e.detail;
            var slide = data.slide;
            var bannerLi = hero.querySelectorAll('[data-element-type="heroslide"]');
            var bannerBaseHeader = document.querySelectorAll('[data-banner-base-header="theme-banner-base-header"]');
            bannerBaseHeaderLength = bannerBaseHeader.length;
            bannerLiLength = bannerLi.length;
            var hasHeaderSix = headerContainer.classList.contains('zpheader-style-06');
            headercontainerHeight = headerContainer.clientHeight;
            offsetVal = window.pageYOffset;
            if (headerContainer.className.indexOf('theme-header-fixed') > 0 && hasHeaderSix == false && offsetVal <= headercontainerHeight && document.documentElement.clientWidth > 992) {
                for (bhl = 0; bhl < bannerBaseHeaderLength; bhl++) {
                    if (bannerBaseHeader[bhl].className.indexOf('zpdark-header-portion') > -1) {
                        removeClass(bannerBaseHeader[bhl], 'zpdark-header-portion');
                    }
                }
                if (topBar && topBar.className.indexOf('zpdark-header-portion') > -1) {
                    removeClass(topBar, 'zpdark-header-portion');
                }
                if (slide.className.indexOf('zpdark-section') > -1) {
                    for (bhl = 0; bhl < bannerBaseHeaderLength; bhl++) {
                        addClass(bannerBaseHeader[bhl], 'zpdark-header-portion');
                    }
                    if (topBar) {
                        addClass(topBar, 'zpdark-header-portion');
                    }
                }
            }

            if (slide.className.indexOf('zplight-section') > -1 || slide.className.indexOf('zpdefault-section') > -1 ){
                var arrowContainer = document.getElementsByClassName('zsslider-arrows-container');
                for(ac=0;ac<arrowContainer.length;ac++){
                	var arrowSvg = arrowContainer[ac].getElementsByTagName('svg');
                    for(asv=0;asv<arrowSvg.length;asv++){
                    	arrowSvg[asv].style.fill = '#404040';
                    }
                }
            }
            else{
            	var arrowContainer = document.getElementsByClassName('zsslider-arrows-container');
                for(ac=0;ac<arrowContainer.length;ac++){
                	var arrowSvg = arrowContainer[ac].getElementsByTagName('svg');
                    for(asv=0;asv<arrowSvg.length;asv++){
                    	arrowSvg[asv].style.fill = '#fff';
                    }
                }
            }

        });
    }

    // BANNER BASED HEADER TEXT COLOR END

    // ADDING ID TO pageContainer FOR SKIP to main CONTENT

    if(pageContainer){
      pageContainer.setAttribute('id','thememaincontent');
      pageContainer.setAttribute('role','main');
    }

    menuAccessibility();

    // EVENT DISPATCH FOR DOM CONTENT LOADED

    var event = new Event('zs:header:dom', {});
    document.dispatchEvent(event);
    mobileheader();
});


window.addEventListener('resize', function(event) {
    responsivechanges();
    bannerLiScroll = document.querySelectorAll('[data-element-type="heroslide"]');
    bannerLiScrollLength = bannerLiScroll.length;
    bannerBaseHeaderScrl = document.querySelectorAll('[data-banner-base-header="theme-banner-base-header"]');
    bannerBaseHeaderScrlLength = bannerBaseHeaderScrl.length;
    headerContainer = document.querySelectorAll('[data-headercontainer="zptheme-data-headercontainer"]')[0];
    if(!headerContainer){
      return;
    }
    var hasHeaderSix = headerContainer.classList.contains('zpheader-style-06');
    if (topBar) {
      var darkTopbar = topBar.getAttribute('data-dark-part-applied').trim();
    }
    if(hasHeaderSix == false){
      for (bhscrl = 0; bhscrl < bannerBaseHeaderScrlLength; bhscrl++) {
  			var darkHeader = bannerBaseHeaderScrl[bhscrl].getAttribute('data-dark-part-applied').trim();
      }
    }
    headerContainerChildren = headerContainer.children;
    if(document.documentElement.clientWidth < 992){
  	  headerContainer.style.top = '0px';
      if(topBar){
        topBar.style.opacity = '1';
      }
    }
    for (bnrScrl = 0; bnrScrl < bannerLiScrollLength; bnrScrl++) {
        var bannerDark = bannerLiScroll[bnrScrl].classList.contains('zpdark-section');
        var hasHeaderSix = headerContainer.classList.contains('zpheader-style-06');
        if (headerContainer.className.indexOf('theme-header-fixed') > 0 && bannerLiScroll[bnrScrl].className.indexOf('zpdark-section') > -1 && bannerLiScroll[bnrScrl].className.indexOf('curslide') > -1 && hasHeaderSix == false && document.documentElement.clientWidth > 768 && document.documentElement.clientWidth < 1028) {
            for (bhscrl = 0; bhscrl < bannerBaseHeaderScrlLength; bhscrl++) {
                addClass(bannerBaseHeaderScrl[bhscrl], 'zpdark-header-portion');
            }
            if (topBar) {
                addClass(topBar, 'zpdark-header-portion');
            }
        }
        if (headerContainer.className.indexOf('theme-header-fixed') > 0 && hasHeaderSix == false && bannerDark == false && bannerLiScroll[bnrScrl].className.indexOf('curslide') > -1 && document.documentElement.clientWidth > 768 && document.documentElement.clientWidth < 1028) {
            for (bhscrl = 0; bhscrl < bannerBaseHeaderScrlLength; bhscrl++) {
                removeClass(bannerBaseHeaderScrl[bhscrl], 'zpdark-header-portion');
            }
            if (topBar && topBar.className.indexOf('zpdark-header-portion') > -1) {
                removeClass(topBar, 'zpdark-header-portion');
            }
        }
        if (headerContainer.className.indexOf('theme-header-fixed') > 0 && document.documentElement.clientWidth < 992) {
            if(hasHeaderSix == false){
              for (bhscrl = 0; bhscrl < bannerBaseHeaderScrlLength; bhscrl++) {
                  var darkHeader = bannerBaseHeaderScrl[bhscrl].getAttribute('data-dark-part-applied').trim();
                  if (darkHeader == 'true') {
                      addClass(bannerBaseHeaderScrl[bhscrl], 'zpdark-header-portion');
                  }
                  if (darkHeader == 'false' && bannerBaseHeaderScrl[bhscrl].className.indexOf('zpdark-header-portion') > -1) {
                      removeClass(bannerBaseHeaderScrl[bhscrl], 'zpdark-header-portion');
                  }
              }
            }
            if (topBar && darkTopbar == 'true') {
                addClass(topBar, 'zpdark-header-portion');
            }
            if (topBar && darkTopbar == 'false' && topBar.className.indexOf('zpdark-header-portion') > -1) {
                removeClass(topBar, 'zpdark-header-portion');
            }
        }
    }

    // CURRENCY RESIZE

    var currencyListContainer = document.querySelector('[data-theme-currency-list-ul]');
    if(currencyListContainer){
    	var currencyListClick = document.querySelector('[data-theme-currency-list-container]');
    	var currencyContainerHeight = document.querySelector('[data-theme-currency-list-container]');
    	var currencyPlaceHeight = document.querySelector('[data-theme-currency-placeholder-non-res]');
    	var curHeight = currencyListContainer.firstChild.clientHeight;
    	if(window.innerWidth > 992){
    		if(curHeight != 0){
    			currencyPlaceHeight.style.height = curHeight+'px';
    			currencyContainerHeight.style.height = curHeight+'px';
    		}
    	}
      else{
        currencyPlaceHeight.style.height = 'auto';
        currencyContainerHeight.style.height = 'auto';
      }
      if(window.innerWidth < 992 ){
          currencyListContainer.addEventListener('click',function(){
              currencyListClick.removeEventListener('click',openCurrency);
          });
      }
      else{
        currencyListContainer.addEventListener('click',function(){
          currencyListClick.removeEventListener('click',openCurrency);
        	currencyListClick.addEventListener('click',openCurrency);
        });
      }
    }

    // CURRENCY RESIZE END

    // EVENT DISPATCH FOR RESIZING

    var event = new Event('zs:header:resize', {});
    document.dispatchEvent(event);
    drawerPlugin();
    fullBannerHeaderColor();
    hideLang();
    mobileheader();
});

window.addEventListener('scroll', function(event) {
    if (!body) {
        VariableInit();
    }
    if(!headerContainer){
      return;
    }
    if(!header){
      return;
    }
    headerHeight = header.clientHeight;
    headercontainerHeight = headerContainer.clientHeight;
    var hasHeaderSix = headerContainer.classList.contains('zpheader-style-06');
    headerContainerChildren = headerContainer.children;
    headerContainerChildrenLength = headerContainerChildren.length;
    offsetVal = window.pageYOffset;

    bannerLiScroll = document.querySelectorAll('[data-element-type="heroslide"]');
    bannerLiScrollLength = bannerLiScroll.length;
    bannerBaseHeaderScrl = document.querySelectorAll('[data-banner-base-header="theme-banner-base-header"]');
    bannerBaseHeaderScrlLength = bannerBaseHeaderScrl.length;

    var menu = document.querySelector('[data-zp-theme-menu]');

    if(hasHeaderSix == false){
      for (bhscrl = 0; bhscrl < bannerBaseHeaderScrlLength; bhscrl++) {
          var darkHeader = bannerBaseHeaderScrl[bhscrl].getAttribute('data-dark-part-applied').trim();
      }
    }

    // HEADER STATIC TO FIXED ANIMATION STARTS

    if (offsetVal > headercontainerHeight) {
        if (headerContainer.className.indexOf('theme-header-fixed') == -1) {
            if (headerVal == 'zptheme-data-header') {
                if (header.className.indexOf('theme-header-animate') == -1) {
                    header.className += ' theme-header-animate';
                }
            }
            if (headerVal == 'zptheme-data-header-transparent') {
                if (header.className.indexOf('theme-header-animate') == -1) {
                    header.className += ' theme-header-animate';
                }
                if (header.className.indexOf('theme-header-transparent') == -1) {
                    header.className += ' theme-header-transparent';
                }
            }
            header.setAttribute('style', 'animation:headerStart 0.8s linear 1 alternate');
            if (headerVal == 'zptheme-data-header' && window.innerWidth > 992 || headerVal == 'zptheme-data-header-transparent' && window.innerWidth > 992) {
                body.style.paddingTop = headerHeight + 'px';
            }
        }
        if(topBar && window.innerWidth > 992){
            topBar.style.opacity = '0';
      	}
        if(menuParent && searchCartScrollPosition && window.innerWidth > 992 && (header.className.indexOf('theme-header-animate') > -1 || headerContainer.className.indexOf('theme-header-animate') > -1)){
          searchCartScrollPosition.appendChild(headerSearchCart);
        }
        if(menuParent && headerSearchCartPositionNonResponsive && searchCartScrollPosition && window.innerWidth > 992){
          headerSearchCartPositionNonResponsive.innerHTML = "";
          menu && templateUti.dispatchEvent(menu, 'zsMenu:rewrap');
        }
        if(menuParent && searchCartScrollPosition && window.innerWidth > 992){
          addClass(menuParent,'theme-menu-align-left');
        }
    }
    else{
      if (headerVal == 'zptheme-data-header') {
          header.className = header.className.replace('theme-header-animate', '');
      }
      if (headerVal == 'zptheme-data-header-transparent') {
          header.className = header.className.replace('theme-header-animate', '');
          header.className = header.className.replace('theme-header-transparent', '');
      }
      header.setAttribute('style', 'animation:noTopBarAni 0.8s linear 1 alternate;');
      body.style.paddingTop = '0px';
      if(topBar && window.innerWidth > 992){
          topBar.style.opacity = '1';
      }
      if(menuParent && headerSearchCartPositionNonResponsive && searchCartScrollPosition && window.innerWidth > 992){
        headerSearchCartPositionNonResponsive.appendChild(headerSearchCart);
        menu && templateUti.dispatchEvent(menu, 'zsMenu:rewrap');
      }
      if(menuParent && searchCartScrollPosition && window.innerWidth > 992){
        removeClass(menuParent,'theme-menu-align-left');
      }
    }

    // HEADER STATIC TO FIXED ANIMATION END

    // FULL WIDTH BANNER HEADER FIXED START

    if (headerContainer.className.indexOf('theme-header-fixed') > 0) {
        scrollTopVal = headercontainerHeight-headerHeight;
        if (window.innerWidth > 992) {
            headerContainer.setAttribute('style', 'top:' + (-offsetVal) + 'px;transition:none;');
        }
        if (offsetVal >= headercontainerHeight) {

            headerContainer.className = headerContainer.className.replace('theme-header-animate', '');
            if (headerVal == 'zptheme-data-header') {
                headerContainer.className += ' theme-header-animate';
                for (bnrScrl = 0; bnrScrl < bannerLiScrollLength; bnrScrl++) {
                    if (window.innerWidth > 992 && darkHeader == 'true' && hasHeaderSix == false) {
                        for (bhscrl = 0; bhscrl < bannerBaseHeaderScrlLength; bhscrl++) {
                            addClass(bannerBaseHeaderScrl[bhscrl], 'zpdark-header-portion');
                        }
                        if (topBar && topBar.className.indexOf('zpdark-header-portion') > -1) {
                            topBar.className = topBar.className.replace('zpdark-header-portion', '');
                        }
                    }
                    if (window.innerWidth > 992 && darkHeader == 'false' && hasHeaderSix == false) {
                        for (bhscrl = 0; bhscrl < bannerBaseHeaderScrlLength; bhscrl++) {
                            removeClass(bannerBaseHeaderScrl[bhscrl], 'zpdark-header-portion');
                        }
                    }
                }
                if (window.innerWidth > 992) {
                    headerContainer.setAttribute('style', 'top:' + (-scrollTopVal) + 'px;transition:0.3s linear;');
                }
            }
            header.className = header.className.replace('theme-header-transparent', '');
            if (headerVal == 'zptheme-data-header-transparent') {

                headerContainer.className += ' theme-header-animate';
                header.className += ' theme-header-transparent';

                for (bnrScrl = 0; bnrScrl < bannerLiScrollLength; bnrScrl++) {
                    if (window.innerWidth > 992 && darkHeader == 'true' && hasHeaderSix == false) {
                        for (bhscrl = 0; bhscrl < bannerBaseHeaderScrlLength; bhscrl++) {
                            addClass(bannerBaseHeaderScrl[bhscrl], 'zpdark-header-portion');
                        }
                        if (topBar && topBar.className.indexOf('zpdark-header-portion') > -1) {
                            topBar.className = topBar.className.replace('zpdark-header-portion', '');
                        }
                    }
                    if (window.innerWidth > 992 && darkHeader == 'false' && hasHeaderSix == false) {
                        for (bhscrl = 0; bhscrl < bannerBaseHeaderScrlLength; bhscrl++) {
                            removeClass(bannerBaseHeaderScrl[bhscrl], 'zpdark-header-portion');
                        }
                    }
                }
                if (window.innerWidth > 992) {
                    headerContainer.setAttribute('style', 'top:' + (-scrollTopVal) + 'px;transition:0.3s linear;');
                }
            }
            if (headerVal == '') {
                if (window.innerWidth > 992) {
                    headerContainer.setAttribute('style', 'top:' + (-offsetVal) + 'px;');
                }
            }
        }
        if (offsetVal < LastScrollVal) {

            if (offsetVal < headercontainerHeight) {
                if (headerVal == '') {
                    if (window.innerWidth > 992) {
                        headerContainer.setAttribute('style', 'top:' + (-offsetVal) + 'px;transition:0s linear;');
                    }
                } else {
                    if (window.innerWidth > 992) {
                        headerContainer.setAttribute('style', 'top:' + (-offsetVal) + 'px;transition:0.3s linear;');
                    }
                }
                headerContainer.className = headerContainer.className.replace('theme-header-animate', '');
                headerContainer.className = headerContainer.className.replace('theme-header-transparent', '');
                for (bnrScrl = 0; bnrScrl < bannerLiScrollLength; bnrScrl++) {
                    var bannerDark = bannerLiScroll[bnrScrl].classList.contains('zpdark-section');
                    if (bannerLiScroll[bnrScrl].className.indexOf('zpdark-section') > -1 && hasHeaderSix == false && bannerLiScroll[bnrScrl].className.indexOf('curslide') > -1 && window.innerWidth > 992) {
                        for (bhscrl = 0; bhscrl < bannerBaseHeaderScrlLength; bhscrl++) {
                            addClass(bannerBaseHeaderScrl[bhscrl], 'zpdark-header-portion');
                        }
                        if (topBar) {
                            addClass(topBar, 'zpdark-header-portion');
                        }
                    } else if (bannerDark == false && hasHeaderSix == false && bannerLiScroll[bnrScrl].className.indexOf('curslide') > -1 && window.innerWidth > 992) {
                        for (bhscrl = 0; bhscrl < bannerBaseHeaderScrlLength; bhscrl++) {
                            removeClass(bannerBaseHeaderScrl[bhscrl], 'zpdark-header-portion');
                        }
                        if (topBar && topBar.className.indexOf('zpdark-header-portion') > -1) {
                            removeClass(topBar, 'zpdark-header-portion');
                        }

                    }

                }
            }
        }
    }

    // FULL WIDTH BANNER HEADER FIXED END

    LastScrollVal = offsetVal;

    // EVENT DISPATCH FOR SCROLL

    var event = new Event('zs:header:scroll', {});
    document.dispatchEvent(event);

});

// 	ONSCROLL HEADER EFFECT END
var searchClick = 0;
function toggleSearch(e) {
    elem = e || window.event;
    var elemParent = elem.closest('[data-zs-search-container]');
    var searchcont = elemParent.querySelector('[data-search="zptheme-search-container"]');
    var searchInput = elemParent.querySelector('[data-search-input="zptheme-search-input"]');
    var searchHideOverlay = elemParent.querySelector('[data-theme-search-overlay="theme-search-overlay"]');
    if(searchClick == 0){
      searchcont.style.display = 'block';
      searchHideOverlay.style.display = "block";
      searchInput.focus();
      elem.setAttribute('aria-expanded','true');
      searchClick = 1;
    }
    if(searchClick == 1){
      searchHideOverlay.addEventListener('click',function(){
          searchcont.style.display = "none";
          searchHideOverlay.style.display = "none";
          searchInput.value = "";
          elem.setAttribute('aria-expanded','false');
          searchClick = 0;
      });
    }
}

var templateUti = {
  dispatchEvent : function ( ctx, customEventType, details, capture ) {

    function createCustomEvent( details ) {

        var ev = null;

        if (typeof CustomEvent === 'function') {
            ev = new CustomEvent( customEventType, {
                    detail : details,
                    bubbles: true,
                    capture : !!capture
                });
        } else {
            ev = document.createEvent( 'CustomEvent' );

            ev.initCustomEvent( customEventType, true, true, details );
        }

        return ev;
    }

    if (typeof ctx === 'string') {
        capture = details;
        details = customEventType;
        customEventType = ctx;
        ctx     = document.body;
    }

    var evt = createCustomEvent( details );

    ctx.dispatchEvent( evt );
  }
}
function mobileheader(){
    if (document.documentElement.clientWidth < 992) {
        if(mobileHeaderStyle == '03'){
            var mobileHeaderSearchInput = document.querySelector('[data-zs-mobile-header-search] [data-zs-search-input]'),
                mobileHeaderSearchIcon = document.querySelector('[data-zs-mobile-header-search-icon]'),
                mobileHeaderSearchBackButton = document.querySelector('[data-zs-mobile-header-search-back]'),
                mobileHeaderSearchClearButton = document.querySelector('[data-zs-mobile-header-search-clear]'),
                mobileHeaderClearSearchInput = '';
            if(window.location.href.indexOf("search-products") > -1){
                var mobileHeaderSearch = document.querySelector('[data-zs-mobile-header-search]');
                if(mobileHeaderSearch){
                    mobileHeaderSearch.classList.add('theme-mobile-header-search-open');
                }
                if(mobileHeaderSearchBackButton){
                    mobileHeaderSearchBackButton.addEventListener('click',function(){
                        history.go(-1);
                    });
                }
            }
            if(mobileHeaderSearchInput){
                mobileHeaderSearchInput.addEventListener('keyup',function(){
                    if (this.value) {
                        this.closest('[data-zs-mobile-header-search]').querySelector('[data-zs-mobile-header-search-clear]').style.display = 'block';
                    } else {
                        this.closest('[data-zs-mobile-header-search]').querySelector('[data-zs-mobile-header-search-clear]').style.display = 'none';
                    }
                });
            }
            if(mobileHeaderSearchIcon){
                mobileHeaderSearchIcon.addEventListener('click',function(){
                    this.closest('[data-zs-mobile-header-search]').classList.add('theme-mobile-header-search-open');
                    this.closest('[data-zs-mobile-header-search]').querySelector('[data-zs-search-input]').focus();
                });
            }
            if(mobileHeaderSearchBackButton){
                mobileHeaderSearchBackButton.addEventListener('click',function(){
                    this.closest('[data-zs-mobile-header-search]').classList.remove('theme-mobile-header-search-open');
                });
            }
            if(mobileHeaderSearchClearButton){
                mobileHeaderSearchClearButton.addEventListener('click',function(){
                    mobileHeaderClearSearchInput = this.closest('[data-zs-mobile-header-search]').querySelector('[data-zs-search-input]');
                    mobileHeaderClearSearchInput.value = ""
                    mobileHeaderClearSearchInput.focus();
                    this.style.display = 'none';
                });
            }
            var portalUserName = document.querySelector('[data-portal-profile]'),
                portalLogoutParent = document.querySelector('[data-portal-logout]');
                if(portalUserName && portalLogoutParent && portalLogoutParent.parentNode){
                    portalUserName.appendChild(portalLogoutParent.parentNode);
                }
            drawerPlugin();
        }else if(mobileHeaderStyle == '02'){
            var mobileHeaderOpenSearchInput = document.querySelector('[data-zs-mobile-openstyle-searchbox] [data-zs-search-input]');
            if(mobileHeaderOpenSearchInput){
                mobileHeaderOpenSearchInput.blur();
            }
            var menuclose = document.querySelector('[data-zp-theme-burger-icon]');
            if(menuclose && menuclose.classList.contains('theme-close-icon')){
                menuclose.click();
            }
            var standalone = window.navigator.standalone || (window.matchMedia('(display-mode: standalone)').matches),
            userAgent = window.navigator.userAgent.toLowerCase(),
            safari = /safari/.test(userAgent),
            ios = /iphone|ipod|ipad/.test(userAgent);
            if (ios && !standalone && !safari) {    //iOS webview check
                var ishome = window.location.pathname === "/" ? true : false;
                var mobileHeaderResponsiveGoBack = document.querySelector('[data-zs-mobile-header-responsive-goback]'),
                    mobileHeaderBranding = document.querySelector('[data-zs-branding]'),
                    mobileHeaderResponsiveMenuArea = document.querySelector('[data-zs-responsive-menu-area]');
                if(ishome){
                    if(mobileHeaderResponsiveGoBack){
                        mobileHeaderResponsiveGoBack.style.display = 'none';
                    }
                    if(mobileHeaderBranding){
                        mobileHeaderBranding.style.display = 'flex';
                    }
                    if(mobileHeaderResponsiveMenuArea){
                        mobileHeaderResponsiveMenuArea.style.flex = '';
                    }
                }else{
                    if(mobileHeaderResponsiveGoBack){
                        mobileHeaderResponsiveGoBack.style.display = 'flex';
                    }
                    if(mobileHeaderBranding){
                        mobileHeaderBranding.style.display = 'none';
                    }
                    if(mobileHeaderResponsiveMenuArea){
                        mobileHeaderResponsiveMenuArea.style.flex = '1 1 auto';
                    }
                }
            }
        }
    }
}

function drawerPlugin(){
    var drawerPlugin = {};
    drawerPlugin.init = function() {
        drawerPlugin.drawerWrapper = document.querySelector("[data-zs-drawer]");
        drawerPlugin.drawerOpenButton = document.querySelectorAll("[data-zs-drawer-open-button]");
        drawerPlugin.drawerCloseButton = document.querySelector("[data-zs-drawer-close-button]");

        if(drawerPlugin.drawerOpenButton){
            drawerPlugin.drawerOpenButton.forEach(function(drawerOpenButton){
                drawerOpenButton.addEventListener("click", function(){
                    drawerPlugin.open(this.getAttribute('data-zs-drawer-open-button'));
                });
            });
        }
        if(drawerPlugin.drawerCloseButton){
            drawerPlugin.drawerCloseButton.addEventListener("click", function(){
                drawerPlugin.close();
            });
        }
    }
    drawerPlugin.open = function(targetContentSelector){
        var targetContent = document.querySelector("[data-zs-drawer-content="+targetContentSelector+"]");
        if(targetContent && drawerPlugin.drawerWrapper){
            drawerPlugin.drawerWrapper.classList.add('active');
            targetContent.classList.add('active');
        }
        document.getElementsByTagName("body")[0].classList.add('theme-body-overflowhidden');
    }
    drawerPlugin.close = function(){
        var activeDrawerContent = document.querySelector("[data-zs-drawer-content].active");
        if(activeDrawerContent && drawerPlugin.drawerWrapper){
            drawerPlugin.drawerWrapper.classList.remove('active');
            activeDrawerContent.classList.remove('active');
        }
        document.getElementsByTagName("body")[0].classList.remove('theme-body-overflowhidden');
    }
    drawerPlugin.init();
}

function displayMode(){
    var standalone = window.navigator.standalone || (window.matchMedia('(display-mode: standalone)').matches),
        userAgent = window.navigator.userAgent.toLowerCase(),
        android = /android/.test(userAgent);
        safari = /safari/.test(userAgent),
        ios = /iphone|ipod|ipad/.test(userAgent) || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1,
        webview = (android && /; wv\)/.test(userAgent)) || (ios && !standalone && !safari),
        displayMode = {
            "standalone" : standalone,
            "isWebView" : webview,
            "platform" : ios ? 'ios' : android ? 'android' : 'other'
        };
        return displayMode;
}


// CURRENCY OPTION CODE

function hideCurrency(){
    var currencyList = document.querySelectorAll('[data-theme-currency-list]');
    var currencyListContainer = document.querySelector('[data-theme-currency-list-ul]');
    var currencyHideOverlay = document.querySelector('[data-theme-currency-hide-overlay]');
		var resMenu = document.querySelector('[data-non-res-menu="zptheme-menu-non-res"]');
		var currencyMobileOpenTop = document.querySelector('[data-theme-currency-open-top]');
    for(cur=0;cur<currencyList.length;cur++){
      currencyList[cur].style.display = 'none';
      currencyListContainer.firstChild.style.display = "flex";
      removeClass(currencyListContainer,'theme-currency-open');
      if(currencyList[cur].hasAttribute('tabindex')){
        currencyList[cur].removeAttribute('tabindex')
      }
		}
    currencyHideOverlay.style.display = "none";
		currencyMobileOpenTop.style.display = "none";
		removeClass(resMenu,'theme-change-zindex');
    var currencyListClick = document.querySelector('[data-zs-currency-list]');
    currencyListClick.setAttribute('aria-expanded','false');
    currencyListClick.setAttribute('aria-haspopup','true');
    currencyListClick.setAttribute('role','button');
}
function closeCurrencyMobile(){
	var currencyList = document.querySelectorAll('[data-theme-currency-list]');
	var currencyListContainer = document.querySelector('[data-theme-currency-list-ul]');
	var currencyHideMobile = document.querySelector('[data-theme-currency-hide-mobile]');
	var currencyMobileOpenTop = document.querySelector('[data-theme-currency-open-top]');
	var menuId = currencyListContainer.getAttribute('data-theme-currency-list-ul');
  var menuClose = document.querySelector('[data-zp-burger-clickable-area="'+menuId+'"]');
	var resMenu = document.querySelector('[data-non-res-menu="zptheme-menu-non-res"]');
	for(cur=0;cur<currencyList.length;cur++){
		currencyList[cur].style.display = 'none';
		currencyListContainer.firstChild.style.display = "flex";
		removeClass(currencyListContainer,'theme-currency-open');
	}
  if(mobileHeaderStyle != '03'){
	  menuClose.click();
  }
	currencyHideMobile.style.display = "none";
	currencyMobileOpenTop.style.display = "none";
	removeClass(resMenu,'theme-change-zindex');
}
function currentCurrency(currentList){
	var currencyListContainer = document.querySelector('[data-theme-currency-list-ul]');
	var currenyOpen = currencyListContainer.classList.contains('theme-currency-open');
  var currencyList = document.querySelectorAll('[data-theme-currency-list]');
	var menuId = currencyListContainer.getAttribute('data-theme-currency-list-ul');
  var currencyMobileOpenTop = document.querySelector('[data-theme-currency-open-top]');
  var menuClose = document.querySelector('[data-zp-burger-clickable-area="'+menuId+'"]');
	var resMenu = document.querySelector('[data-non-res-menu="zptheme-menu-non-res"]');
	if(currentList != currencyListContainer.childNodes[0]){
		currencyListContainer.insertBefore(currentList,currencyListContainer.childNodes[0]);
		// multi_currency.change(currentList.innerText);
	}
	if(currenyOpen == true && mobileHeaderStyle != '03'){
		menuClose.click();
	}
  currencyMobileOpenTop.style.display = "none";
  if(window.innerWidth <= 992){
      for(cur=0;cur<currencyList.length;cur++){
          currencyList[cur].style.display = 'none';
          currencyListContainer.firstChild.style.display = "flex";
          removeClass(currencyListContainer,'theme-currency-open');
      }
			if(resMenu){
				removeClass(resMenu,'theme-change-zindex');
			}
  }
  var currencyListClick = document.querySelector('[data-zs-currency-list]');
  currencyListClick.setAttribute('aria-expanded','false');
  currencyListClick.setAttribute('aria-haspopup','true');
  currencyListClick.setAttribute('role','button');
  currencyListClick.focus();
}

function openCurrency(){
	var currencyList = document.querySelectorAll('[data-theme-currency-list]');
	var currencyListContainer = document.querySelector('[data-theme-currency-list-ul]');
	var currencyHideOverlay = document.querySelector('[data-theme-currency-hide-overlay]');
	var currencyHideMobile = document.querySelector('[data-theme-currency-hide-mobile]');
	var currencyMobileOpenTop = document.querySelector('[data-theme-currency-open-top]');
	var resMenu = document.querySelector('[data-non-res-menu="zptheme-menu-non-res"]');
	for(cur=0;cur<currencyList.length;cur++){
		if(currencyList[cur].style.display == 'flex'){
			currencyList[cur].style.display = 'none';
			currencyListContainer.firstChild.style.display = "flex";
			removeClass(currencyListContainer,'theme-currency-open');
			currencyHideOverlay.style.display = "none";
			removeClass(resMenu,'theme-change-zindex');
			currencyMobileOpenTop.style.display = "none";
      var currencyListClick = document.querySelector('[data-zs-currency-list]');
      currencyListClick.setAttribute('aria-expanded','false');
      currencyListClick.setAttribute('aria-haspopup','true');
      currencyListClick.setAttribute('role','button');
      var parentUl = currencyList[cur].parentElement;
      var allCurrency = parentUl.querySelectorAll('[data-theme-currency-list]');
      for(var ac=0;ac<allCurrency.length;ac++){
        if(allCurrency[ac].hasAttribute('tabindex')){
          allCurrency[ac].removeAttribute('tabindex')
        }
      }
		}
		else{
			currencyList[cur].style.display = 'flex';
			addClass(currencyListContainer,'theme-currency-open');
			currencyHideOverlay.style.display = "block";
			currencyHideMobile.style.display = "block";
			currencyMobileOpenTop.style.display = "flex";
			addClass(resMenu,'theme-change-zindex');
      var currencyListClick = document.querySelector('[data-zs-currency-list]');
      currencyListClick.setAttribute('aria-expanded','true');
      currencyListClick.setAttribute('aria-haspopup','false');
      currencyListClick.removeAttribute('role');
      var parentUl = currencyList[cur].parentElement;
      var allCurrency = parentUl.querySelectorAll('[data-theme-currency-list]');
      for(var ac=0;ac<allCurrency.length;ac++){
        allCurrency[ac].setAttribute('tabindex','0')
      }
      var firstLi = currencyListClick.querySelector('[data-theme-currency-list]')
      firstLi.focus();
		}
	}
}

// CURRENCY OPTION CODE END


// ACCESSIBILITY

function hideOnBlur(elm,matchesEl,hidefunction,foucsAgainElem){
  elm.addEventListener('blur',function(e){
    setTimeout(function(){
      var isFocused = matchesEl.matches(':focus-within');
      if(!isFocused){
        hidefunction();
      }else if(foucsAgainElem){
        foucsAgainElem.addEventListener('focus',function(e){
          hidefunction();
          this.setAttribute('aria-expanded','false');
          this.setAttribute('aria-haspopup','true');
        })
      }
    },0) // Needed this 0s timout for safari to make support this :focus-within
  })
}


// CURRENCY ACCESSIBILITY FOCUS KEYPRESS

var currencyTarget = document.querySelector('[data-zs-currency-list]');
var currencyListUl = document.querySelector('[data-theme-currency-list-ul]');
var currencyList = currencyListUl && currencyListUl.querySelectorAll('[data-theme-currency-list]');
if(currencyTarget){
  currencyTarget.addEventListener('click',openCurrency);
  currencyTarget.addEventListener('keydown',function(e){
    if(e.which === 13){
      this.click();
    }
    if(e.which === 9){
      hideOnBlur(this,this,hideCurrency);
    }
  });
  for(var i=0; i<currencyList.length; i++){
    currencyList[i].addEventListener('keydown',function(e){
      if(e.which === 13){
        this.click();
        currencyTarget.focus();
        e.stopPropagation();
      }
      if(e.which === 9){
        hideOnBlur(this,currencyListUl,hideCurrency);
      }
      if(e.which === 27){
        hideCurrency();
        currencyTarget.focus();
        currencyTarget.role = 'button';
      }
    })
  }
}

// SEARCH ACCESSIBILITY

var headerSearchIcon = document.querySelector('[data-zs-search-icon]');
var searchHideOverlay = document.querySelector('[data-theme-search-overlay="theme-search-overlay"]');
var searchFormCont = document.querySelector('[data-search]');
var searchInputs = searchFormCont && searchFormCont.querySelectorAll('input');
document.addEventListener('keydown',function(e){
  var searchOverlayDisplay = searchHideOverlay && searchHideOverlay.style.display;
  if(searchOverlayDisplay != 'none' && e.which === 27){
    hideSearchOnblur();
    headerSearchIcon && headerSearchIcon.focus();
  }
})
function hideSearchOnblur(){
  searchHideOverlay && searchHideOverlay.click();
}
if(headerSearchIcon){
  headerSearchIcon.addEventListener('keydown',function(e){
    if(e.which === 13){
      if(searchClick == 0){
        this.click();
        e.preventDefault();
      }else{
        hideSearchOnblur();
      }
    }
  });
  for(var i=0;i<searchInputs.length;i++){
    searchInputs[i].addEventListener('keydown',function(e){
      if(e.which === 9){
        hideOnBlur(this,searchFormCont,hideSearchOnblur);
      }
    })
  }
}

// MENU ACCESSIBILITY

function menuAccessibility(){
  var submenuClickableArrow = document.querySelectorAll('[data-theme-accessible-submenu]');
  var mainMenuContainer = document.querySelector('[data-zs-menu-container]');
  var allMenuAnchor = mainMenuContainer && mainMenuContainer.querySelectorAll('a');
  var megamenuBackdrop = document.querySelector('.zpmm-backdrop-enabled');
  function displayNoneElem(elem){
      elem && (elem.style.display = 'none')
  }
  function displayBlockElem(elem){
      elem && (elem.style.display = 'block')
  }
  function currentSubmenuUl(currentEl){
    var currentLi = currentEl.closest('li');
    var currentSubMenu = currentLi.querySelector('ul');
    displayBlockElem(currentSubMenu)
    var currentSubMenuFirstAnchor = currentSubMenu.firstChild.querySelector('a');
    currentSubMenuFirstAnchor.focus();
    var currentSubMenuAllLi = currentSubMenu.querySelectorAll('li');
    for(var i=0;i<currentSubMenuAllLi.length;i++){
      currentSubMenuAllLi[i].role = 'menuitem';
    }
  }
  function findTopLevelLi(element) {
    var currentElement = element;
    while (currentElement && currentElement.tagName === 'LI') {
      element = currentElement;
      currentElement = currentElement.parentElement.parentElement;
    }
    return element;
  }
  function hideAllCurrentSubmenus(element){
    var topLevelLi = findTopLevelLi(element.parentElement)
    var allSubmenuContainer = topLevelLi.querySelectorAll('[data-zs-submenu-container]');
    for(as=0;as<allSubmenuContainer.length;as++){
      displayNoneElem(allSubmenuContainer[as])
    }
  }
  function nextlevelLiFocus(elem){
    var closestFirstLevelLi = findTopLevelLi(elem.parentElement);
    var nextFirstLevlLi = closestFirstLevelLi.nextElementSibling;
    var nextLevelAnchor = nextFirstLevlLi && nextFirstLevlLi.querySelector('a');
    event.preventDefault();
    nextLevelAnchor && nextLevelAnchor.focus();
  }
  function curentLevelLiFocus(elem){
    var curFirstLevelLi = findTopLevelLi(elem.parentElement);
    var curFirstLevelAnchor =  curFirstLevelLi && curFirstLevelLi.querySelector('a');
    curFirstLevelAnchor && curFirstLevelAnchor.focus();
  }
  if(mainMenuContainer){
    for(var i=0;i<submenuClickableArrow.length;i++){
      var isItSubmenu = submenuClickableArrow[i].closest('[data-zs-submenu-container]');
      var isMegaMenu = submenuClickableArrow[i].parentElement.hasAttribute('data-megamenu');
      if(isMegaMenu){
        var menuName = submenuClickableArrow[i].innerText;
        submenuClickableArrow[i].setAttribute('aria-label',i18n.get('accessibility.menu.menu_has_submenu', menuName));
      }
      submenuClickableArrow[i].addEventListener('keydown',function(e){
        var isItSubmenu = this.closest('[data-zs-submenu-container]');
        var isMegaMenu = this.parentElement.hasAttribute('data-megamenu');
        var megamenuId = isMegaMenu && this.parentElement.getAttribute('data-megamenu');
        var megamenuCont = document.querySelector('[data-megamenu-content="'+megamenuId+'"]');
        if( e.which === 40 || e.which === 32){
          if(!isMegaMenu){
            // SHOW SUBMENU
            currentSubmenuUl(this)
            e.preventDefault();
          }else{

            // SHOW MEGAMENU

            var megamenuDirection = document.querySelector("[data-megamenu-direction]").getAttribute('data-megamenu-direction');
            var sidebarnav = document.querySelector('.theme-veritical-nav-with-sidebar');

            if (megamenuDirection == 'right') {
                var megamenuContentContainer = $D.get('[data-megamenu-content-container]');
                var megamenuItemBounding = this.parentElement.getBoundingClientRect();
                var firstMegamenuItemBounding = this.parentElement.parentElement.firstChild.getBoundingClientRect();
                var firstVisibleMegamenuItem, lastVisibleMegamenuItem, elPos;
                var megamenuItems = this.parentElement.parentElement.querySelectorAll("[data-megamenu]");
                for (var i = 0; i < megamenuItems.length; i++) {
                    var isElemOutOfViewport = isOutOfViewport(megamenuItems[i]);
                    if ((firstVisibleMegamenuItem == 'undefined' || firstVisibleMegamenuItem == null) && isElemOutOfViewport.top == false) {
                        firstVisibleMegamenuItem = megamenuItems[i]
                    }
                    if ((firstVisibleMegamenuItem != 'undefined' || firstVisibleMegamenuItem != null) && (lastVisibleMegamenuItem == 'undefined' || lastVisibleMegamenuItem == null) && isElemOutOfViewport.bottom == true) {
                        lastVisibleMegamenuItem = megamenuItems[i - 1]
                    } else if (i == megamenuItems.length - 1) {
                        lastVisibleMegamenuItem = megamenuItems[i]
                    }
                }
                elPos = getPosition(firstVisibleMegamenuItem);
                megamenuCont.style.top = elPos.top - 30 + "px";
                if ((lastVisibleMegamenuItem.getBoundingClientRect().top - firstVisibleMegamenuItem.getBoundingClientRect().top) < 450) {
                    megamenuCont.style.height = 500 + "px";
                } else {
                    megamenuCont.style.height = lastVisibleMegamenuItem.getBoundingClientRect().top + lastVisibleMegamenuItem.getBoundingClientRect().height - firstVisibleMegamenuItem.getBoundingClientRect().top + 60 + "px";
                }
                megamenuCont.style.left = megamenuContentContainer.clientWidth + "px";
                megamenuCont.style.width = (window.innerWidth || document.documentElement.clientWidth) - megamenuContentContainer.clientWidth + "px";


                if (typeof(sidebarnav) == 'undefined' || sidebarnav == null) {
                    megamenuCont.style.top = firstMegamenuItemBounding.top - 30 + "px";
                }
                addClass(megamenuCont,'mmactive');
                displayBlockElem(megamenuBackdrop)

            }else{
              addClass(megamenuCont,'mmactive');
              displayBlockElem(megamenuBackdrop)
            }
            var megamenuLinks = megamenuCont.querySelectorAll('a');
            megamenuLinks[0].focus();

            // HIDE MEGAMENU

            var currentMegamenuLi = this.parentElement;
            function currentMainAnchorFocus(event){
              var curMegamenuAnchor = currentMegamenuLi.querySelector('a');
              event.preventDefault();
              curMegamenuAnchor.focus();
              displayNoneElem(megamenuBackdrop)
              $D.hasClass(body,'theme-body-overflowhidden') && removeClass(body,'theme-body-overflowhidden');
            }
            function nextMainAnchorFocus(event){
              var nextLiElem = currentMegamenuLi.nextElementSibling;
              var nextAnchorElem = nextLiElem && nextLiElem.querySelector('a');
              event.preventDefault();
              nextAnchorElem && nextAnchorElem.focus();
              displayNoneElem(megamenuBackdrop)
              if(!nextAnchorElem){
                currentMainAnchorFocus(event)
              }
              $D.hasClass(body,'theme-body-overflowhidden') && removeClass(body,'theme-body-overflowhidden');
            }
            megamenuLinks.forEach(function (megamenuLink, index) {
              megamenuLink.addEventListener('keydown', function (event) {
                var currentMegamenuCont = this.closest('[data-megamenu-content]');
                if (index === 0 && event.which === 9 && event.shiftKey) {
                  $D.hasClass(currentMegamenuCont,'mmactive') && removeClass(currentMegamenuCont,'mmactive');
                  currentMainAnchorFocus(event);
                }
                if (index === megamenuLinks.length - 1 && event.which === 9 && !event.shiftKey) {
                  $D.hasClass(currentMegamenuCont,'mmactive') && removeClass(currentMegamenuCont,'mmactive');
                  nextMainAnchorFocus(event);
                }
                if(event.which === 27){
                  var currentMegamenuCont = this.closest('[data-megamenu-content]');
                  $D.hasClass(currentMegamenuCont,'mmactive') && removeClass(currentMegamenuCont,'mmactive');
                  displayNoneElem(megamenuBackdrop)
                  var curMegamenuAnchor = currentMegamenuLi.querySelector('a');
                  event.preventDefault();
                  curMegamenuAnchor.focus();
                  $D.hasClass(body,'theme-body-overflowhidden') && removeClass(body,'theme-body-overflowhidden');
                }
              });
            });
            e.preventDefault();
          }
        }
      })
    }

    // HANDLING SUBMENU HIDE

    for(var i=0;i<allMenuAnchor.length;i++){
      allMenuAnchor[i].addEventListener('keydown',function(e){
        if(e.which === 9){
          var blurUl = this.closest('[data-zs-submenu-container]');
          var blurUrlAnchros = blurUl && blurUl.querySelectorAll(':scope > li > a');
          blurUl && blurUrlAnchros.forEach(function (submenuAnchor, index) {
            submenuAnchor.addEventListener('blur',function(event){
              var topLi = findTopLevelLi(this.parentElement);
              var topAnchor = topLi.querySelector('a');
              var nextTopLi = topLi.nextElementSibling;
              var nextTopAnchor = nextTopLi && nextTopLi.querySelector('a');
              if(index === 0 && blurUrlAnchros.length == 1){
                var blurUlinBlurUl = blurUl.querySelectorAll('[data-zs-submenu-container]');
                if(blurUlinBlurUl.length === 0){
                  displayNoneElem(blurUl)
                }
              }else if(index === 0){
                var curSubmenuContianer = this.closest('[data-zs-submenu-container]');
                var previousMenuAnchor = curSubmenuContianer && curSubmenuContianer.previousElementSibling;
                previousMenuAnchor && previousMenuAnchor.addEventListener('focus',function(event){
                  displayNoneElem(blurUl);
                });
              }
              topAnchor.addEventListener('focus',function(event){
                hideAllCurrentSubmenus(this);
              })
              nextTopAnchor && nextTopAnchor.addEventListener('focus',function(event){
                hideAllCurrentSubmenus(this.parentElement.previousElementSibling);
              })
            })
            submenuAnchor.addEventListener('keydown',function(event){
              if (index === 0 && event.which === 9 && event.shiftKey) {
                displayNoneElem(blurUl)
              }
              if (index === blurUrlAnchros.length - 1 && event.which === 9 && !event.shiftKey) {
                displayNoneElem(blurUl)
                var thisParentSubmenu = this.closest('[data-zs-submenu-container]');
                var subMenuInItsParent = thisParentSubmenu.querySelectorAll('[data-zs-submenu-container]');
                if(subMenuInItsParent.length == 0){
                  var lastSubmenuUl = this.closest('[data-zs-submenu-container]');
                  var lastSubmenuLastAnchor = lastSubmenuUl.lastChild.querySelector('a');
                  if(this.isSameNode(lastSubmenuLastAnchor)){
                    hideAllCurrentSubmenus(this);
                  }
                }
              }
            })
          })
        }
        if(e.which === 27){
          hideAllCurrentSubmenus(this);
          curentLevelLiFocus(this)
        }
      })
    }
  }

}
function notify_error() {
     event.preventDefault()
     window.parent.notification(window.parent.cms_i18n("ui.search.builderorpreview.nolinkwork"), "warning");
 }

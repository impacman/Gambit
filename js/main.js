window.addEventListener('load', function() {
    const loader = document.querySelector('.loader');
    loader.className += ' no-active';

    const body = $('body');

    function createGoodMenu() {
        const wrapCategories = document.querySelectorAll('.wrap-categories');
        const catalogWrapCategories = document.querySelector('.catalog__wrap-categories');

        const bag = document.querySelectorAll('.bag');
        const order = document.querySelector('.catalog-order');
        const orderBody = document.querySelector('.catalog-order__body');
        const orderClose = document.querySelectorAll('.catalog-order__close');
        const orderPriceCounter = document.querySelector('.catalog-order-price__coutn');
        const bagCounter = document.querySelectorAll('.bag__count');
        const bagCurrency = document.querySelectorAll('.bag__currency');
        const addBag = document.querySelector('.catalog-order__list-add');
        const clearBag = document.querySelector('.catalog-order__list-clear');

        const foodOrder = document.querySelector('.food');

        const modalInBag = document.querySelector('.modal-order #question');
        const modalNo = document.querySelector('.modal-order__btn_no');
        const modalYes = document.querySelector('.modal-order__btn_yes');

        if (wrapCategories.length > 0) {
            console.log('Catalog wrap categories : ' + wrapCategories.length);

            function createGoodInPage() {
            
                const getData0 = async function(url) {
                    const response = await fetch(url);
            
                    if (!response.ok) {
                        throw new Error (`Address error: '${url}', error status: ${response.status} :(`);
                    }
            
                    return await response.json();
                    
                };
                const getData1 = async function(url) {
                    const response = await fetch(url);
            
                    if (!response.ok) {
                        throw new Error (`Address error: '${url}', error status: ${response.status} :(`);
                    }
            
                    return await response.json();
                    
                };
                const getData2 = async function(url) {
                    const response = await fetch(url);
            
                    if (!response.ok) {
                        throw new Error (`Address error: '${url}', error status: ${response.status} :(`);
                    }
            
                    return await response.json();
                    
                };
                const getData3 = async function(url) {
                    const response = await fetch(url);
            
                    if (!response.ok) {
                        throw new Error (`Address error: '${url}', error status: ${response.status} :(`);
                    }
            
                    return await response.json();
                    
                };
                const getData4 = async function(url) {
                    const response = await fetch(url);
            
                    if (!response.ok) {
                        throw new Error (`Address error: '${url}', error status: ${response.status} :(`);
                    }
            
                    return await response.json();
                    
                };
                const getData5 = async function(url) {
                    const response = await fetch(url);
            
                    if (!response.ok) {
                        throw new Error (`Address error: '${url}', error status: ${response.status} :(`);
                    }
            
                    return await response.json();
                    
                };
                const getData6 = async function(url) {
                    const response = await fetch(url);
            
                    if (!response.ok) {
                        throw new Error (`Address error: '${url}', error status: ${response.status} :(`);
                    }
            
                    return await response.json();
                    
                };
                const getData7 = async function(url) {
                    const response = await fetch(url);
            
                    if (!response.ok) {
                        throw new Error (`Address error: '${url}', error status: ${response.status} :(`);
                    }
            
                    return await response.json();
                    
                };
                const getData8 = async function(url) {
                    const response = await fetch(url);
            
                    if (!response.ok) {
                        throw new Error (`Address error: '${url}', error status: ${response.status} :(`);
                    }
            
                    return await response.json();
                    
                };
                const getData9 = async function(url) {
                    const response = await fetch(url);
            
                    if (!response.ok) {
                        throw new Error (`Address error: '${url}', error status: ${response.status} :(`);
                    }
            
                    return await response.json();
                    
                };
                const getData10 = async function(url) {
                    const response = await fetch(url);
            
                    if (!response.ok) {
                        throw new Error (`Address error: '${url}', error status: ${response.status} :(`);
                    }
            
                    return await response.json();
                    
                };
                const getData11 = async function(url) {
                    const response = await fetch(url);
            
                    if (!response.ok) {
                        throw new Error (`Address error: '${url}', error status: ${response.status} :(`);
                    }
            
                    return await response.json();
                    
                };
                const getData12 = async function(url) {
                    const response = await fetch(url);
            
                    if (!response.ok) {
                        throw new Error (`Address error: '${url}', error status: ${response.status} :(`);
                    }
            
                    return await response.json();
                    
                };
                const getData13 = async function(url) {
                    const response = await fetch(url);
            
                    if (!response.ok) {
                        throw new Error (`Address error: '${url}', error status: ${response.status} :(`);
                    }
            
                    return await response.json();
                    
                };
                const getData14 = async function(url) {
                    const response = await fetch(url);
            
                    if (!response.ok) {
                        throw new Error (`Address error: '${url}', error status: ${response.status} :(`);
                    }
            
                    return await response.json();
                    
                };
                const getData15 = async function(url) {
                    const response = await fetch(url);
            
                    if (!response.ok) {
                        throw new Error (`Address error: '${url}', error status: ${response.status} :(`);
                    }
            
                    return await response.json();
                    
                };
                const getData16 = async function(url) {
                    const response = await fetch(url);
            
                    if (!response.ok) {
                        throw new Error (`Address error: '${url}', error status: ${response.status} :(`);
                    }
            
                    return await response.json();
                    
                };
                const getData17 = async function(url) {
                    const response = await fetch(url);
            
                    if (!response.ok) {
                        throw new Error (`Address error: '${url}', error status: ${response.status} :(`);
                    }
            
                    return await response.json();
                    
                };
                const getData18 = async function(url) {
                    const response = await fetch(url);
            
                    if (!response.ok) {
                        throw new Error (`Address error: '${url}', error status: ${response.status} :(`);
                    }
            
                    return await response.json();
                    
                };
                const getData19 = async function(url) {
                    const response = await fetch(url);
            
                    if (!response.ok) {
                        throw new Error (`Address error: '${url}', error status: ${response.status} :(`);
                    }
            
                    return await response.json();
                    
                };
                const getData20 = async function(url) {
                    const response = await fetch(url);
            
                    if (!response.ok) {
                        throw new Error (`Address error: '${url}', error status: ${response.status} :(`);
                    }
            
                    return await response.json();
                    
                };
                const getData21 = async function(url) {
                    const response = await fetch(url);
            
                    if (!response.ok) {
                        throw new Error (`Address error: '${url}', error status: ${response.status} :(`);
                    }
            
                    return await response.json();
                    
                };            
            
                function goods(catalog, goodEl) {
                    const catalogWrapGood = document.getElementById(catalog);
            
                    catalogWrapGood.insertAdjacentElement('beforeend', goodEl); 
                };
                const creatGood0 = function(goodEl) {
                    const { id, name, descr, price, image } = goodEl;
            
                    const good = document.createElement('div');
                    good.className = 'catalog__good';
            zz
                    good.insertAdjacentHTML('beforeend', `
                        <div class="good">
                            <div class="good__wrapper">
                                <div class="good__wrapper-img">
                                    <img src="${image}" alt="good-img">
                                </div>
                                <div class="good__info">
                                    <div class="good__wrap">
                                        <div class="good__name">
                                            ${name}
                                        </div>
                                        <div class="good__descr">
                                            ${descr}
                                        </div>
                                    </div>
                                    <div class="good__product product">
                                        <div class="product__price">
                                            ${price}
                                            <span class="product__currency">
                                                р.
                                            </span>
                                        </div>
                                        <div id="${id}" class="numeric">
                                            <button class="numeric__btn numeric__btn_minus"></button>
                                            <input class="numeric__val" type="text" value="0" readonly>
                                            <button class="numeric__btn numeric__btn_plus"></button>
                                        </div>
                                    </div>
                                </div>
                            </div>    
                        </div>
                    `);    
                    
                    goods('catalog0', good); 
                };
                const creatGood1 = function(goodEl) {
                    const { id, name, descr, price, image } = goodEl;
            
                    const good = document.createElement('div');
                    good.className = 'catalog__good';
            
                    good.insertAdjacentHTML('beforeend', `
                        <div class="good">
                            <div class="good__wrapper">
                                <div class="good__wrapper-img">
                                    <img src="${image}" alt="good-img">
                                </div>
                                <div class="good__info">
                                    <div class="good__wrap">
                                        <div class="good__name">
                                            ${name}
                                        </div>
                                        <div class="good__descr">
                                            ${descr}
                                        </div>
                                    </div>
                                    <div class="good__product product">
                                        <div class="product__price">
                                            ${price}
                                            <span class="product__currency">
                                                р.
                                            </span>
                                        </div>
                                        <div id="${id}" class="numeric">
                                            <button class="numeric__btn numeric__btn_minus"></button>
                                            <input class="numeric__val" type="text" value="0" readonly>
                                            <button class="numeric__btn numeric__btn_plus"></button>
                                        </div>
                                    </div>
                                </div>
                            </div>    
                        </div>
                    `);    
                    
                    goods('catalog1', good);
                };
                const creatGood2 = function(goodEl) {
                    const { id, name, descr, price, image } = goodEl;
            
                    const good = document.createElement('div');
                    good.className = 'catalog__good';
            
                    good.insertAdjacentHTML('beforeend', `
                        <div class="good">
                            <div class="good__wrapper">
                                <div class="good__wrapper-img">
                                    <img src="${image}" alt="good-img">
                                </div>
                                <div class="good__info">
                                    <div class="good__wrap">
                                        <div class="good__name">
                                            ${name}
                                        </div>
                                        <div class="good__descr">
                                            ${descr}
                                        </div>
                                    </div>
                                    <div class="good__product product">
                                        <div class="product__price">
                                            ${price}
                                            <span class="product__currency">
                                                р.
                                            </span>
                                        </div>
                                        <div id="${id}" class="numeric">
                                            <button class="numeric__btn numeric__btn_minus"></button>
                                            <input class="numeric__val" type="text" value="0" readonly>
                                            <button class="numeric__btn numeric__btn_plus"></button>
                                        </div>
                                    </div>
                                </div>
                            </div>    
                        </div>
                    `);    
                    
                    goods('catalog2', good);
                };
                const creatGood3 = function(goodEl) {
                    const { id, name, descr, price, image } = goodEl;
            
                    const good = document.createElement('div');
                    good.className = 'catalog__good';
            
                    good.insertAdjacentHTML('beforeend', `
                        <div class="good">
                            <div class="good__wrapper">
                                <div class="good__wrapper-img">
                                    <img src="${image}" alt="good-img">
                                </div>
                                <div class="good__info">
                                    <div class="good__wrap">
                                        <div class="good__name">
                                            ${name}
                                        </div>
                                        <div class="good__descr">
                                            ${descr}
                                        </div>
                                    </div>
                                    <div class="good__product product">
                                        <div class="product__price">
                                            ${price}
                                            <span class="product__currency">
                                                р.
                                            </span>
                                        </div>
                                        <div id="${id}" class="numeric">
                                            <button class="numeric__btn numeric__btn_minus"></button>
                                            <input class="numeric__val" type="text" value="0" readonly>
                                            <button class="numeric__btn numeric__btn_plus"></button>
                                        </div>
                                    </div>
                                </div>
                            </div>    
                        </div>
                    `);    
                    
                    goods('catalog3', good);
                };
                const creatGood4 = function(goodEl) {
                    const { id, name, descr, price, image } = goodEl;
            
                    const good = document.createElement('div');
                    good.className = 'catalog__good';
            
                    good.insertAdjacentHTML('beforeend', `
                        <div class="good">
                            <div class="good__wrapper">
                                <div class="good__wrapper-img">
                                    <img src="${image}" alt="good-img">
                                </div>
                                <div class="good__info">
                                    <div class="good__wrap">
                                        <div class="good__name">
                                            ${name}
                                        </div>
                                        <div class="good__descr">
                                            ${descr}
                                        </div>
                                    </div>
                                    <div class="good__product product">
                                        <div class="product__price">
                                            ${price}
                                            <span class="product__currency">
                                                р.
                                            </span>
                                        </div>
                                        <div id="${id}" class="numeric">
                                            <button class="numeric__btn numeric__btn_minus"></button>
                                            <input class="numeric__val" type="text" value="0" readonly>
                                            <button class="numeric__btn numeric__btn_plus"></button>
                                        </div>
                                    </div>
                                </div>
                            </div>    
                        </div>
                    `);    
                    
                    goods('catalog4', good);
                };
                const creatGood5 = function(goodEl) {
                    const { id, name, descr, price, image } = goodEl;
            
                    const good = document.createElement('div');
                    good.className = 'catalog__good';
            
                    good.insertAdjacentHTML('beforeend', `
                        <div class="good">
                            <div class="good__wrapper">
                                <div class="good__wrapper-img">
                                    <img src="${image}" alt="good-img">
                                </div>
                                <div class="good__info">
                                    <div class="good__wrap">
                                        <div class="good__name">
                                            ${name}
                                        </div>
                                        <div class="good__descr">
                                            ${descr}
                                        </div>
                                    </div>
                                    <div class="good__product product">
                                        <div class="product__price">
                                            ${price}
                                            <span class="product__currency">
                                                р.
                                            </span>
                                        </div>
                                        <div id="${id}" class="numeric">
                                            <button class="numeric__btn numeric__btn_minus"></button>
                                            <input class="numeric__val" type="text" value="0" readonly>
                                            <button class="numeric__btn numeric__btn_plus"></button>
                                        </div>
                                    </div>
                                </div>
                            </div>    
                        </div>
                    `);    
                    
                    goods('catalog5', good);
                };
                const creatGood6 = function(goodEl) {
                    const { id, name, descr, price, image } = goodEl;
            
                    const good = document.createElement('div');
                    good.className = 'catalog__good';
            
                    good.insertAdjacentHTML('beforeend', `
                        <div class="good">
                            <div class="good__wrapper">
                                <div class="good__wrapper-img">
                                    <img src="${image}" alt="good-img">
                                </div>
                                <div class="good__info">
                                    <div class="good__wrap">
                                        <div class="good__name">
                                            ${name}
                                        </div>
                                        <div class="good__descr">
                                            ${descr}
                                        </div>
                                    </div>
                                    <div class="good__product product">
                                        <div class="product__price">
                                            ${price}
                                            <span class="product__currency">
                                                р.
                                            </span>
                                        </div>
                                        <div id="${id}" class="numeric">
                                            <button class="numeric__btn numeric__btn_minus"></button>
                                            <input class="numeric__val" type="text" value="0" readonly>
                                            <button class="numeric__btn numeric__btn_plus"></button>
                                        </div>
                                    </div>
                                </div>
                            </div>    
                        </div>
                    `);    
                    
                    goods('catalog6', good);
                };
                const creatGood7 = function(goodEl) {
                    const { id, name, descr, price, image } = goodEl;
            
                    const good = document.createElement('div');
                    good.className = 'catalog__good';
            
                    good.insertAdjacentHTML('beforeend', `
                        <div class="good">
                            <div class="good__wrapper">
                                <div class="good__wrapper-img">
                                    <img src="${image}" alt="good-img">
                                </div>
                                <div class="good__info">
                                    <div class="good__wrap">
                                        <div class="good__name">
                                            ${name}
                                        </div>
                                        <div class="good__descr">
                                            ${descr}
                                        </div>
                                    </div>
                                    <div class="good__product product">
                                        <div class="product__price">
                                            ${price}
                                            <span class="product__currency">
                                                р.
                                            </span>
                                        </div>
                                        <div id="${id}" class="numeric">
                                            <button class="numeric__btn numeric__btn_minus"></button>
                                            <input class="numeric__val" type="text" value="0" readonly>
                                            <button class="numeric__btn numeric__btn_plus"></button>
                                        </div>
                                    </div>
                                </div>
                            </div>    
                        </div>
                    `);    
                    
                    goods('catalog7', good);
                };
                const creatGood8 = function(goodEl) {
                    const { id, name, descr, price, image } = goodEl;
            
                    const good = document.createElement('div');
                    good.className = 'catalog__good';
            
                    good.insertAdjacentHTML('beforeend', `
                        <div class="good">
                            <div class="good__wrapper">
                                <div class="good__wrapper-img">
                                    <img src="${image}" alt="good-img">
                                </div>
                                <div class="good__info">
                                    <div class="good__wrap">
                                        <div class="good__name">
                                            ${name}
                                        </div>
                                        <div class="good__descr">
                                            ${descr}
                                        </div>
                                    </div>
                                    <div class="good__product product">
                                        <div class="product__price">
                                            ${price}
                                            <span class="product__currency">
                                                р.
                                            </span>
                                        </div>
                                        <div id="${id}" class="numeric">
                                            <button class="numeric__btn numeric__btn_minus"></button>
                                            <input class="numeric__val" type="text" value="0" readonly>
                                            <button class="numeric__btn numeric__btn_plus"></button>
                                        </div>
                                    </div>
                                </div>
                            </div>    
                        </div>
                    `);    
                    
                    goods('catalog8', good);
                };
                const creatGood9 = function(goodEl) {
                    const { id, name, descr, price, image } = goodEl;
            
                    const good = document.createElement('div');
                    good.className = 'catalog__good';
            
                    good.insertAdjacentHTML('beforeend', `
                        <div class="good">
                            <div class="good__wrapper">
                                <div class="good__wrapper-img">
                                    <img src="${image}" alt="good-img">
                                </div>
                                <div class="good__info">
                                    <div class="good__wrap">
                                        <div class="good__name">
                                            ${name}
                                        </div>
                                        <div class="good__descr">
                                            ${descr}
                                        </div>
                                    </div>
                                    <div class="good__product product">
                                        <div class="product__price">
                                            ${price}
                                            <span class="product__currency">
                                                р.
                                            </span>
                                        </div>
                                        <div id="${id}" class="numeric">
                                            <button class="numeric__btn numeric__btn_minus"></button>
                                            <input class="numeric__val" type="text" value="0" readonly>
                                            <button class="numeric__btn numeric__btn_plus"></button>
                                        </div>
                                    </div>
                                </div>
                            </div>    
                        </div>
                    `);    
                    
                    goods('catalog9', good);
                };
                const creatGood10 = function(goodEl) {
                    const { id, name, descr, price, image } = goodEl;
            
                    const good = document.createElement('div');
                    good.className = 'catalog__good';
            
                    good.insertAdjacentHTML('beforeend', `
                        <div class="good">
                            <div class="good__wrapper">
                                <div class="good__wrapper-img">
                                    <img src="${image}" alt="good-img">
                                </div>
                                <div class="good__info">
                                    <div class="good__wrap">
                                        <div class="good__name">
                                            ${name}
                                        </div>
                                        <div class="good__descr">
                                            ${descr}
                                        </div>
                                    </div>
                                    <div class="good__product product">
                                        <div class="product__price">
                                            ${price}
                                            <span class="product__currency">
                                                р.
                                            </span>
                                        </div>
                                        <div id="${id}" class="numeric">
                                            <button class="numeric__btn numeric__btn_minus"></button>
                                            <input class="numeric__val" type="text" value="0" readonly>
                                            <button class="numeric__btn numeric__btn_plus"></button>
                                        </div>
                                    </div>
                                </div>
                            </div>    
                        </div>
                    `);    
                    
                    goods('catalog10', good);
                };
                const creatGood11 = function(goodEl) {
                    const { id, name, descr, price, image } = goodEl;
            
                    const good = document.createElement('div');
                    good.className = 'catalog__good';
            
                    good.insertAdjacentHTML('beforeend', `
                        <div class="good">
                            <div class="good__wrapper">
                                <div class="good__wrapper-img">
                                    <img src="${image}" alt="good-img">
                                </div>
                                <div class="good__info">
                                    <div class="good__wrap">
                                        <div class="good__name">
                                            ${name}
                                        </div>
                                        <div class="good__descr">
                                            ${descr}
                                        </div>
                                    </div>
                                    <div class="good__product product">
                                        <div class="product__price">
                                            ${price}
                                            <span class="product__currency">
                                                р.
                                            </span>
                                        </div>
                                        <div id="${id}" class="numeric">
                                            <button class="numeric__btn numeric__btn_minus"></button>
                                            <input class="numeric__val" type="text" value="0" readonly>
                                            <button class="numeric__btn numeric__btn_plus"></button>
                                        </div>
                                    </div>
                                </div>
                            </div>    
                        </div>
                    `);    
                    
                    goods('catalog11', good);
                };
                const creatGood12 = function(goodEl) {
                    const { id, name, descr, price, image } = goodEl;
            
                    const good = document.createElement('div');
                    good.className = 'catalog__good';
            
                    good.insertAdjacentHTML('beforeend', `
                        <div class="good">
                            <div class="good__wrapper">
                                <div class="good__wrapper-img">
                                    <img src="${image}" alt="good-img">
                                </div>
                                <div class="good__info">
                                    <div class="good__wrap">
                                        <div class="good__name">
                                            ${name}
                                        </div>
                                        <div class="good__descr">
                                            ${descr}
                                        </div>
                                    </div>
                                    <div class="good__product product">
                                        <div class="product__price">
                                            ${price}
                                            <span class="product__currency">
                                                р.
                                            </span>
                                        </div>
                                        <div id="${id}" class="numeric">
                                            <button class="numeric__btn numeric__btn_minus"></button>
                                            <input class="numeric__val" type="text" value="0" readonly>
                                            <button class="numeric__btn numeric__btn_plus"></button>
                                        </div>
                                    </div>
                                </div>
                            </div>    
                        </div>
                    `);    
                    
                    goods('catalog12', good);
                };
                const creatGood13 = function(goodEl) {
                    const { id, name, descr, price, image } = goodEl;
            
                    const good = document.createElement('div');
                    good.className = 'catalog__good';
            
                    good.insertAdjacentHTML('beforeend', `
                        <div class="good">
                            <div class="good__wrapper">
                                <div class="good__wrapper-img">
                                    <img src="${image}" alt="good-img">
                                </div>
                                <div class="good__info">
                                    <div class="good__wrap">
                                        <div class="good__name">
                                            ${name}
                                        </div>
                                        <div class="good__descr">
                                            ${descr}
                                        </div>
                                    </div>
                                    <div class="good__product product">
                                        <div class="product__price">
                                            ${price}
                                            <span class="product__currency">
                                                р.
                                            </span>
                                        </div>
                                        <div id="${id}" class="numeric">
                                            <button class="numeric__btn numeric__btn_minus"></button>
                                            <input class="numeric__val" type="text" value="0" readonly>
                                            <button class="numeric__btn numeric__btn_plus"></button>
                                        </div>
                                    </div>
                                </div>
                            </div>    
                        </div>
                    `);    
                    
                    goods('catalog13', good);
                };
                const creatGood14 = function(goodEl) {
                    const { id, name, descr, price, image } = goodEl;
            
                    const good = document.createElement('div');
                    good.className = 'catalog__good';
            
                    good.insertAdjacentHTML('beforeend', `
                        <div class="good">
                            <div class="good__wrapper">
                                <div class="good__wrapper-img">
                                    <img src="${image}" alt="good-img">
                                </div>
                                <div class="good__info">
                                    <div class="good__wrap">
                                        <div class="good__name">
                                            ${name}
                                        </div>
                                        <div class="good__descr">
                                            ${descr}
                                        </div>
                                    </div>
                                    <div class="good__product product">
                                        <div class="product__price">
                                            ${price}
                                            <span class="product__currency">
                                                р.
                                            </span>
                                        </div>
                                        <div id="${id}" class="numeric">
                                            <button class="numeric__btn numeric__btn_minus"></button>
                                            <input class="numeric__val" type="text" value="0" readonly>
                                            <button class="numeric__btn numeric__btn_plus"></button>
                                        </div>
                                    </div>
                                </div>
                            </div>    
                        </div>
                    `);    
                    
                    goods('catalog14', good);
                };
                const creatGood15 = function(goodEl) {
                    const { id, name, descr, price, image } = goodEl;
            
                    const good = document.createElement('div');
                    good.className = 'catalog__good';
            
                    good.insertAdjacentHTML('beforeend', `
                        <div class="good">
                            <div class="good__wrapper">
                                <div class="good__wrapper-img">
                                    <img src="${image}" alt="good-img">
                                </div>
                                <div class="good__info">
                                    <div class="good__wrap">
                                        <div class="good__name">
                                            ${name}
                                        </div>
                                        <div class="good__descr">
                                            ${descr}
                                        </div>
                                    </div>
                                    <div class="good__product product">
                                        <div class="product__price">
                                            ${price}
                                            <span class="product__currency">
                                                р.
                                            </span>
                                        </div>
                                        <div id="${id}" class="numeric">
                                            <button class="numeric__btn numeric__btn_minus"></button>
                                            <input class="numeric__val" type="text" value="0" readonly>
                                            <button class="numeric__btn numeric__btn_plus"></button>
                                        </div>
                                    </div>
                                </div>
                            </div>    
                        </div>
                    `);    
                    
                    goods('catalog15', good);
                };
                const creatGood16 = function(goodEl) {
                    const { id, name, descr, price, image } = goodEl;
            
                    const good = document.createElement('div');
                    good.className = 'catalog__good';
            
                    good.insertAdjacentHTML('beforeend', `
                        <div class="good">
                            <div class="good__wrapper">
                                <div class="good__wrapper-img">
                                    <img src="${image}" alt="good-img">
                                </div>
                                <div class="good__info">
                                    <div class="good__wrap">
                                        <div class="good__name">
                                            ${name}
                                        </div>
                                        <div class="good__descr">
                                            ${descr}
                                        </div>
                                    </div>
                                    <div class="good__product product">
                                        <div class="product__price">
                                            ${price}
                                            <span class="product__currency">
                                                р.
                                            </span>
                                        </div>
                                        <div id="${id}" class="numeric">
                                            <button class="numeric__btn numeric__btn_minus"></button>
                                            <input class="numeric__val" type="text" value="0" readonly>
                                            <button class="numeric__btn numeric__btn_plus"></button>
                                        </div>
                                    </div>
                                </div>
                            </div>    
                        </div>
                    `);    
                    
                    goods('catalog16', good);
                };
                const creatGood17 = function(goodEl) {
                    const { id, name, descr, price, image } = goodEl;
            
                    const good = document.createElement('div');
                    good.className = 'catalog__good';
            
                    good.insertAdjacentHTML('beforeend', `
                        <div class="good">
                            <div class="good__wrapper">
                                <div class="good__wrapper-img">
                                    <img src="${image}" alt="good-img">
                                </div>
                                <div class="good__info">
                                    <div class="good__wrap">
                                        <div class="good__name">
                                            ${name}
                                        </div>
                                        <div class="good__descr">
                                            ${descr}
                                        </div>
                                    </div>
                                    <div class="good__product product">
                                        <div class="product__price">
                                            ${price}
                                            <span class="product__currency">
                                                р.
                                            </span>
                                        </div>
                                        <div id="${id}" class="numeric">
                                            <button class="numeric__btn numeric__btn_minus"></button>
                                            <input class="numeric__val" type="text" value="0" readonly>
                                            <button class="numeric__btn numeric__btn_plus"></button>
                                        </div>
                                    </div>
                                </div>
                            </div>    
                        </div>
                    `);    
                    
                    goods('catalog17', good);
                };
                const creatGood18 = function(goodEl) {
                    const { id, name, descr, price, image } = goodEl;
            
                    const good = document.createElement('div');
                    good.className = 'catalog__good';
            
                    good.insertAdjacentHTML('beforeend', `
                        <div class="good">
                            <div class="good__wrapper">
                                <div class="good__wrapper-img">
                                    <img src="${image}" alt="good-img">
                                </div>
                                <div class="good__info">
                                    <div class="good__wrap">
                                        <div class="good__name">
                                            ${name}
                                        </div>
                                        <div class="good__descr">
                                            ${descr}
                                        </div>
                                    </div>
                                    <div class="good__product product">
                                        <div class="product__price">
                                            ${price}
                                            <span class="product__currency">
                                                р.
                                            </span>
                                        </div>
                                        <div id="${id}" class="numeric">
                                            <button class="numeric__btn numeric__btn_minus"></button>
                                            <input class="numeric__val" type="text" value="0" readonly>
                                            <button class="numeric__btn numeric__btn_plus"></button>
                                        </div>
                                    </div>
                                </div>
                            </div>    
                        </div>
                    `);    
                    
                    goods('catalog18', good);
                };
                const creatGood19 = function(goodEl) {
                    const { id, name, descr, price, image } = goodEl;
            
                    const good = document.createElement('div');
                    good.className = 'catalog__good';
            
                    good.insertAdjacentHTML('beforeend', `
                        <div class="good">
                            <div class="good__wrapper">
                                <div class="good__wrapper-img">
                                    <img src="${image}" alt="good-img">
                                </div>
                                <div class="good__info">
                                    <div class="good__wrap">
                                        <div class="good__name">
                                            ${name}
                                        </div>
                                        <div class="good__descr">
                                            ${descr}
                                        </div>
                                    </div>
                                    <div class="good__product product">
                                        <div class="product__price">
                                            ${price}
                                            <span class="product__currency">
                                                р.
                                            </span>
                                        </div>
                                        <div id="${id}" class="numeric">
                                            <button class="numeric__btn numeric__btn_minus"></button>
                                            <input class="numeric__val" type="text" value="0" readonly>
                                            <button class="numeric__btn numeric__btn_plus"></button>
                                        </div>
                                    </div>
                                </div>
                            </div>    
                        </div>
                    `);    
                    
                    goods('catalog19', good);
                };
                const creatGood20 = function(goodEl) {
                    const { id, name, descr, price, image } = goodEl;
            
                    const good = document.createElement('div');
                    good.className = 'catalog__good';
            
                    good.insertAdjacentHTML('beforeend', `
                        <div class="good">
                            <div class="good__wrapper">
                                <div class="good__wrapper-img">
                                    <img src="${image}" alt="good-img">
                                </div>
                                <div class="good__info">
                                    <div class="good__wrap">
                                        <div class="good__name">
                                            ${name}
                                        </div>
                                        <div class="good__descr">
                                            ${descr}
                                        </div>
                                    </div>
                                    <div class="good__product product">
                                        <div class="product__price">
                                            ${price}
                                            <span class="product__currency">
                                                р.
                                            </span>
                                        </div>
                                        <div id="${id}" class="numeric">
                                            <button class="numeric__btn numeric__btn_minus"></button>
                                            <input class="numeric__val" type="text" value="0" readonly>
                                            <button class="numeric__btn numeric__btn_plus"></button>
                                        </div>
                                    </div>
                                </div>
                            </div>    
                        </div>
                    `);    
                    
                    goods('catalog20', good);
                };
                const creatGood21 = function(goodEl) {
                    const { id, name, descr, price, image } = goodEl;
            
                    const good = document.createElement('div');
                    good.className = 'catalog__good';
            
                    good.insertAdjacentHTML('beforeend', `
                        <div class="good">
                            <div class="good__wrapper">
                                <div class="good__wrapper-img">
                                    <img src="${image}" alt="good-img">
                                </div>
                                <div class="good__info">
                                    <div class="good__wrap">
                                        <div class="good__name">
                                            ${name}
                                        </div>
                                        <div class="good__descr">
                                            ${descr}
                                        </div>
                                    </div>
                                    <div class="good__product product">
                                        <div class="product__price">
                                            ${price}
                                            <span class="product__currency">
                                                р.
                                            </span>
                                        </div>
                                        <div id="${id}" class="numeric">
                                            <button class="numeric__btn numeric__btn_minus"></button>
                                            <input class="numeric__val" type="text" value="0" readonly>
                                            <button class="numeric__btn numeric__btn_plus"></button>
                                        </div>
                                    </div>
                                </div>
                            </div>    
                        </div>
                    `);    
                    
                    goods('catalog21', good);
                };
            
                getData0('../db/catalog0.json').then(function(data) {
                    data.forEach(creatGood0); 
                });
                getData1('../db/catalog1.json').then(function(data) {
                    data.forEach(creatGood1); 
                });
                getData2('../db/catalog2.json').then(function(data) {
                    data.forEach(creatGood2); 
                });
                getData3('../db/catalog3.json').then(function(data) {
                    data.forEach(creatGood3); 
                });
                getData4('../db/catalog4.json').then(function(data) {
                    data.forEach(creatGood4); 
                });
                getData5('../db/catalog5.json').then(function(data) {
                    data.forEach(creatGood5); 
                });
                getData6('../db/catalog6.json').then(function(data) {
                    data.forEach(creatGood6); 
                });
                getData7('../db/catalog7.json').then(function(data) {
                    data.forEach(creatGood7); 
                });
                getData8('../db/catalog8.json').then(function(data) {
                    data.forEach(creatGood8); 
                });
                getData9('../db/catalog9.json').then(function(data) {
                    data.forEach(creatGood9); 
                });
                getData10('../db/catalog10.json').then(function(data) {
                    data.forEach(creatGood10); 
                });
                getData11('../db/catalog11.json').then(function(data) {
                    data.forEach(creatGood11);
                });
                getData12('../db/catalog12.json').then(function(data) {
                    data.forEach(creatGood12);
                });
                getData13('../db/catalog13.json').then(function(data) {
                    data.forEach(creatGood13);
                });
                getData14('../db/catalog14.json').then(function(data) {
                    data.forEach(creatGood14);
                });
                getData15('../db/catalog15.json').then(function(data) {
                    data.forEach(creatGood15);
                });
                getData16('../db/catalog16.json').then(function(data) {
                    data.forEach(creatGood16);
                });
                getData17('../db/catalog17.json').then(function(data) {
                    data.forEach(creatGood17);
                });
                getData18('../db/catalog18.json').then(function(data) {
                    data.forEach(creatGood18);
                });
                getData19('../db/catalog19.json').then(function(data) {
                    data.forEach(creatGood19); 
                });
                getData20('../db/catalog20.json').then(function(data) {
                    data.forEach(creatGood20); 
                });
                getData21('../db/catalog21.json').then(function(data) {
                    data.forEach(creatGood21); 
            
                    function heightEl() {
                        let f = $('.good__descr');
                        let catalogGoodEl = $('.catalog__good');
                
                        f.each(function() {
                            let num = 70; // не менять число!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                            
                            let text = $(this).text();
                            let textLenght = text.length;
                
                            if (textLenght != num) {
                                $(this).closest('.good__info').addClass('big');                        
                            } else {  
                            }
                
                        });
                        catalogGoodEl.each(function() {
                            let q = $(this).next().find($('div.good__info'));
                            let qq = $(this).prev().find($('div.good__info'));
                            
                            if ((q.hasClass('big') || (qq.hasClass('big')))) {
                                $(this).find('.good__info').addClass('big');
                            }
                        });
                    }; 
                    function numericVal() {
                        const numeric = $('.numeric');
                        
                        numeric.each(function() {
                            const numericId = $(this).attr('id');
        
                            $(this).find('.numeric__btn').attr({
                                'id': numericId
                            });

                            $(this).removeAttr('id');
    
                            $(this).find('.numeric__btn_minus').on('click', function() {
                                const val = $(this).closest('.numeric').find('.numeric__val')
                                let count = parseInt(val.val()) - 1;
                                count = count < 1 ? 0 : count;
                                val.val(count);
                                val.change();
                            });
                            $(this).find('.numeric__btn_plus').on('click', function() {
                                var val = $(this).closest('.numeric').find('.numeric__val')
                                val.val(parseInt(val.val()) + 1);
                                val.change();
                            });
                        });
                    };   
                    function modalGoods() {
                        const goodImg = $('.good__wrapper-img');

                        goodImg.each(function() {
                            $(this).on('click', function() {
                                $(this).closest('.good').addClass('view')
                                    .find('.good__wrapper').prepend('<div class="good__close"><span></span><span></span></div>')
                                    .find('.good__info').append(`
                                        <table class="good__product-consist-table">
                                            <tbody>
                                                <tr class="good__product-consist-row">
                                                    <th class="good__product-consist-cell no-text"></th>
                                                    <th class="good__product-consist-cell">Белки</th>
                                                    <th class="good__product-consist-cell">Жиры</th>
                                                    <th class="good__product-consist-cell">Углеводы</th>
                                                    <th class="good__product-consist-cell">кКал</th>
                                                </tr>
                                                <tr class="good__product-consist-row">
                                                    <th class="good__product-consist-cell">В 100 г</th>
                                                    <th class="good__product-consist-cell"></th>
                                                    <th class="good__product-consist-cell"></th>
                                                    <th class="good__product-consist-cell"></th>
                                                    <th class="good__product-consist-cell"></th>
                                                </tr>
                                                <tr class="good__product-consist-row">
                                                    <th class="good__product-consist-cell">Порция</th>
                                                    <th class="good__product-consist-cell"></th>
                                                    <th class="good__product-consist-cell"></th>
                                                    <th class="good__product-consist-cell"></th>
                                                    <th class="good__product-consist-cell"></th>
                                                </tr>
                                                <tr class="good__product-consist-row">
                                                    <th colspan="2" class="good__product-consist-cell">100 г.</th>
                                                    <th colspan="3" class="good__product-consist-cell">Артикул: 0000</th>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div class="social social-good">
                                            <div class="social-good__content">
                                                <div class="social-good__item">
                                                    <div class="social-good__share-facebook">
                                                        <span class="icon-facebook"></span>
                                                    </div>
                                                </div>
                                                <div class="social-good__item">
                                                    <div class="social-good__share-vk">
                                                        <span class="icon-vk"></span>
                                                    </div>
                                                </div>
                                                <div class="social-good__item">
                                                    <div class="social-good__share-instagram">
                                                        <span class="icon-instagram"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    `)

                                $('body').addClass('overflow');

                                $(this).closest('.good').find('.good__close').on('click', function() {
                                    $('.good').removeClass('view');
                                    $('body').removeClass('overflow');
                                    $('div.good__close').remove();
                                    $('table.good__product-consist-table').remove();
                                    $('div.social-good').remove();
                                });
                            });

                            
                        });
                    };
                    
                    heightEl();
                    numericVal();
                    modalGoods();
                });  
            };        
            function addAndDelGoodsBag() {
                const card = [];
    
                function addToBag(event) {
                    const target = event.target;
                    const btnAddToBag = target.closest('.numeric__btn');                
                    const btnAddToBagPlus = target.closest('.numeric__btn.numeric__btn_plus');
                    const btnAddToBagMinus = target.closest('.numeric__btn.numeric__btn_minus');
    
                    if (btnAddToBag) {
                        const good = target.closest('.good');
                        const img = good.querySelector('.good__wrapper-img img').getAttribute('src');
                        const price = good.querySelector('.product__price').textContent;
                        const id = btnAddToBag.id;
    
                        if (btnAddToBagPlus) {            
                            const food = card.find(function(item) {                                                                                    
                                return item.id === id;
                            });
                            
                            if (food) {
                                food.count++;
                            } else {
                                card.push({
                                    id,
                                    img,
                                    price,
                                    count: 1
                                });                                                        
                            };  
                        }  
        
                        if (btnAddToBagMinus) {            
                            const food = card.find(function(item) {
                                return item.id === id;
                            });
                            
                            if (food) {
                                food.count--;
    
                                if (food.count === 0) {
                                    card.splice(card.indexOf(food), 1);
                                }
                            } 
    
                        } 
                    }
    
                    renderGood();
                };
    
                function renderGood() {
                    foodOrder.textContent = '';    
            
                    card.forEach(function({ id, img, price, count }) {
                        const itemFood = `
                            <div class="food__col">
                                <div class="food__img">
                                    <img src="${img}" alert="">
                                </div>
                                <div class="counter">
                                    <div class="counter__el">
                                        <span>${count}</span>
                                    </div>
                                </div>
                                <div class="food__wrap-price">
                                    <span class="food__price">${price}</span>
                                </div>
                            </div>
                        `;
                        
                        foodOrder.insertAdjacentHTML('afterbegin', itemFood);
                    });
            
                    const totalPrice = card.reduce(function(result, item) {
                        return result + (parseFloat(item.price) * item.count);
                    }, 0);
            
                    orderPriceCounter.textContent = totalPrice;
                    bagCounter.forEach(function(item) {
                        item.textContent = totalPrice;
                    });
            
                    if (card.length > 0) {
                        bagCounter.forEach(function(item) {
                            item.style.color = '#f04889';
                        });
                        bagCurrency.forEach(function(item) {
                            item.style.color = '#f04889';
                        });
                    } else {
                        bagCounter.forEach(function(item) {
                            item.style.color = '';
                        });
                        bagCurrency.forEach(function(item) {
                            item.style.color = '';
                        });
                    }
    
                };
                
                function closeBag() {
                    order.classList.remove('active');
                    orderBody.classList.remove('active');
                    document.querySelector('body').classList.remove('overflow');
                };
            
                function initialize() {             
                    catalogWrapCategories.addEventListener('click', addToBag);
            
                    bag.forEach(item => {
                        item.addEventListener('click', function() {
                            renderGood();
                
                            order.classList.add('active');
                            orderBody.classList.add('active');
                            document.querySelector('body').classList.add('overflow');
                        });
                    });
                
                    orderClose.forEach(function(item) {
                        item.addEventListener('click', closeBag);
                    });
                    addBag.addEventListener('click', closeBag);
                
                    clearBag.addEventListener('click', function() {
                        if (card.length > 0) {
                            modalInBag.classList.add('open');
                
                            modalNo.addEventListener('click', function() {
                                modalInBag.classList.remove('open');
                            });
                            modalYes.addEventListener('click', function() {
                                modalInBag.classList.remove('open');
                                card.length = 0;
    
                                const val = $('input.numeric__val')
                                
                                let count = parseInt(val.val()) - val.val();
                                val.val(count);
                                val.change();
    
                                renderGood();
                                closeBag();
                            });
                        }
                    });
                };
                initialize();          
            };
            
            createGoodInPage();
            addAndDelGoodsBag();

        } else {
            console.log('Catalog wrap categories : ' + wrapCategories.length);
        }

        if (bag.length > 0) {
            console.log('Bag : ' + bag.length);
        } else {
            console.log('Bag : ' + bag.length);
        }

    }

    function mainFunction() {
        const slider = $('.slider');
        const sliderCategories = $('.catalog__slider');

        const catalogMenuWrapperMain = $('.catalog__menu-wrapper_main');

        // open catalog menu
        const openCataloMenu = $('.open-catalog-menu');
        const catalogMenu = $('.catalog__menu');

        // open menu in phone
        const openMenu = $('.open-menu');
        const menu = $('.menu');
        const titleNo = $('.title');
        const contacUs = $('.contact-us');
        const bgHeader = $('.phone');
        const catalogMenuLink = $('.catalog__link');

        // open modal user
        const buttonUser = $('.menu__user');
        const modalUser = $('.overflow-user');
        const modalUserClose = $('.modal-user__close');

        // open modal contact in phone
        const buttonMes = $('.contact-us');
        const buttonAboutusContact = $('.about-us__contacts');
        const openModal = $('#overflow-contact');
        const modalEl = $('.modal-contact__el');
        const modalBody = $('.modal-contact');

        // open modal in page turbo
        const openModalBtnInfo = $('.info');
        const openModalBtn = $('.turbo-order__link');
        const openModalBtnTurboDelivery = $('.turbo-delivery__link');
        const modal = $('#overflow-turbo');
        const closeModalBtn1 = $('.modal-turbo__close');
        const closeModalBtn2 = $('.modal-turbo__btn');

        // activate the elements -> delivery and news
        const deliveryTitle = $('.delivery__title'); 
        const stocksBody = $('.stocks__body');
        const stocksItem = $('.stocks-item__wrapper-ibg');
        const stocksInner = $('.stocks-item__inner');
        const stocksClose = $('.stocks-item__close');

        // order form
        const elLabel = $('.el__label');
        const formPay = $('label.pay');
        const formReceive = $('label.receive');

        function mainSlider() {
            $(slider).slick({
                infinite: true,
                arrows: false,
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 600,
                easing: 'ease',
                initialSlide: 0,
                autoplay: true,
                pauseOnHover: false,
                swipe: true,
                touchThreshold: 10,
                waitForAnimate: false,
            });
        };
        function catalogSliderCategories() {
            $(sliderCategories).slick({
                infinite: false,
                arrows: true,
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 5,
                speed: 600,
                easing: 'ease',
                initialSlide: 0,
                swipe: true,
                touchThreshold: 10,
                waitForAnimate: false,
                variableWidth: true,
                // -------------------- 
                responsive: [
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToScroll: 8,
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToScroll: 3,
                        }
                    }
                ]
            });

            $('div.catalog__menu-wrapper').on('click', 'div.catalog__inner', function() {
                $(this).closest('div.catalog__body').find('div.catalog__categories').removeClass('active').eq($(this).index()).addClass('active');
                $(this).closest('div.catalog__body').find('div.catalog__holder').removeClass('active').eq($(this).index()).addClass('active');
            }); 
            $('div.catalog__content').on('click', 'div.catalog__wrapper-link', function() {
                $(this).closest('main.wrapper').find('div.catalog__categories').removeClass('active').eq($(this).index()).addClass('active');
                $(this).closest('main.wrapper').find('div.catalog__holder').removeClass('active').eq($(this).index()).addClass('active');                
            });
        };
        
        function submitForm(form) {
            function validateForm(form) {
                $(form).validate({
                    rules: {
                        email: {
                            required: true,
                            email: true
                        }
                    },
                    messages: {
                        email: {
                            required: 'Необходимо заполнить это поле',
                            email: 'Невалидный e-mail'
                        }
                    }
                });
                
                function focusForm(email) {
                    $(form).focusin(function() {
            
                        if ($(email).hasClass('error')) {
                            $(email).parent().addClass('error');
                        } else if ($(email).hasClass('valid')) {
                            $(email).parent().removeClass('error');
                        }  
                    });   
                }    
            
                focusForm('#subscribe-form .form__el[name="email"]');
            }
            validateForm(form);
        }
        function openModalContact() {
            openModal.addClass('show');
            modalBody.addClass('show');
        };
        function closeModalContact() {
            openModal.removeClass('show');
            modalBody.removeClass('show');
        };
        function openModalTurbo() {
            modal.addClass('show');
            body.addClass('overflow');
        }
        function closeModalTurbo() {
            modal.removeClass('show');
            body.removeClass('overflow');
        }

        function replacingTitleInMenu() {
            // let catalogLinkLink = document.querySelectorAll('.catalog__link');
        
            if (catalogMenuLink.length > 0) {
                catalogMenuLink.each(function() {
                    $(this).on('click', choos);
                });
            
                function choos() {
                    let 
                        text = $(this).text(),
                        select = $('.title_menu span');
            
                    select.text(text);           
                }
            };
        };

        function ibg() {
            let ibg = document.querySelectorAll('.ibg');

            for (let f = 0; f < ibg.length; f++) {
                let selector = ibg[f].querySelector('img');

                if (selector) {
                    ibg[f].style.backgroundImage = 'url(' + selector.getAttribute('src') + ')';
                }
            }
        }
        function webp(callback) {
            let webp = new Image();

            webp.onload = webp.onerror = function() {
                callback(webp.height == 2);
            };
            
            webp.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        ibg();
        webp(function (support){
            if (support == true) {
                document.querySelector('body').classList.add('webp');
            } else {
                document.querySelector('body').classList.add('no-webp');
            }
        }); 

        if (slider.length > 0) {
            console.log('Slider : ' + slider.length);
            mainSlider();
        } else {
            console.log('Slider : ' + slider.length);
        };
        if (sliderCategories.length > 0) {
            console.log('Slider categories : ' + sliderCategories.length);
            catalogSliderCategories();
        } else {
            console.log('Slider categories : ' + sliderCategories.length);
        };

        submitForm('#subscribe-form');  
        
        replacingTitleInMenu();
        
        function init() {
            $(window).scroll(function() {
                if ( $(this).scrollTop() > 600 ) {
                    catalogMenuWrapperMain.addClass('stiky');
                }
                else if ( $(this).scrollTop() < 800 ) {
                    catalogMenuWrapperMain.removeClass('stiky');
                }
            });

            // open catalog menu
            if (openCataloMenu.length > 0) {
                console.log('Open catalo menu : ' + openCataloMenu.length);

                openCataloMenu.on('click', function() {                    
                    catalogMenu.toggleClass('open');
                    body.toggleClass('overflow');
                });
            } else {
                console.log('Open catalo menu : ' + openCataloMenu.length);
            };

            // open menu in phone
            openMenu.on('click', function() {
                openCataloMenu.toggleClass('no-active');
                openMenu.toggleClass('active');
                menu.toggleClass('open');
                titleNo.toggleClass('none');
                contacUs.toggleClass('block');
                bgHeader.toggleClass('bg');
                body.toggleClass('overflow');
            }); 
            catalogMenuLink.each(function(event) {
                $(this).on('click', () => {   
                    openCataloMenu.removeClass('no-active');                        
                    openMenu.removeClass('active');
                    menu.removeClass('open');
                    titleNo.removeClass('none');
                    contacUs.removeClass('block');
                    bgHeader.removeClass('bg');
                    body.removeClass('overflow');
                    catalogMenu.removeClass('open');
                });
            });
        
            // opem modal user
            buttonUser.on('click', function() {
                console.log('123');
                
                modalUser.addClass('show');
            });
            modalUserClose.on('click', function() {
                modalUser.removeClass('show');
            });
            
            // open modal contact in phone
            buttonMes.on('click', openModalContact);
            buttonAboutusContact.on('click', openModalContact);
            modalEl.each(function() {
                $(this).on('click', closeModalContact);
            });
            openModal.on('click', closeModalContact);
            
            // open modal turbo in phone
            if (openModalBtnInfo.length > 0) {
                console.log('Open modal btn info : ' + openModalBtnInfo.length);

                openModalBtn.on('click', openModalTurbo);
                openModalBtnInfo.on('click', openModalTurbo);
                openModalBtnTurboDelivery.on('click', openModalTurbo);
                closeModalBtn1.on('click', closeModalTurbo);
                closeModalBtn2.on('click', closeModalTurbo);
            } else {
                console.log('Open modal btn info : ' + openModalBtnInfo.length);
            };
            
            // activate the elements -> delivery and news
            if (deliveryTitle.length > 0) {
                console.log('Delivery title : ' + deliveryTitle.length);

                deliveryTitle.each(function() {
                    $(this).on('click', function() {
                        $(this).next().toggleClass('show');
                    })
                });
            } else {
                console.log('Delivery title : ' + deliveryTitle.length);
            }
            if (stocksItem.length > 0) {
                console.log('Stocks item : ' + stocksItem.length);

                stocksItem.on('click', function() {
                    stocksItem.closest('.stocks-item').find('.stocks-item__wrapper-ibg').removeClass('active');
                    $(this).addClass('active');
                    if( stocksBody.hasClass('one') ){
                        stocksInner.not($(this)).removeClass('active-laptop');
                    }
    
                    $(this).next(stocksInner).toggleClass('active-laptop');
                    $(this).next(stocksInner).addClass('active-phone');
    
                    body.addClass('overflow_phone')
                });
                stocksClose.on('click', function() {
                    stocksItem.next(stocksInner).removeClass('active-laptop');
                    stocksItem.next(stocksInner).removeClass('active-phone');
                    body.removeClass('overflow_phone')
                });                
            } else {
                console.log('Stocks item : ' + stocksItem.length);
            }

            if (elLabel.length > 0) {
                console.log('El label : ' + elLabel.length);       

                elLabel.each(function() {
                    $(this).on('click', function() {
                        $(this).addClass('active').next('.el__input').addClass('active');
                    });
                });
                
            } else {
                console.log('El label : ' + elLabel.length);
            }

            if ((formPay.length > 0) || (formReceive.length > 0)) {
                console.log('Form pay : ' + formPay.length);   
                console.log('Form receive : ' + formReceive.length);   
                
                const modalPay = $('.modal-order #form-pay');
                const modalReceive = $('.modal-order #form-receive');
                
                formPay.on('click', function() {
                    modalPay.addClass('open');
                    const modalPayEl = modalPay.find('.modal-order__text');

                    modalPayEl.each(function() {
                        $(this).on('click', function() {                            
                            const payText = $(this).text();

                            $('input#pay').val(payText)
                            modalPay.removeClass('open');
                        });
                    });

                });

                formReceive.on('click', function() {
                    modalReceive.addClass('open');
                    const modalReceiveEl = modalReceive.find('.modal-order__text');

                    modalReceiveEl.each(function() {
                        $(this).on('click', function() {                            
                            const payText = $(this).text();

                            $('input#receive').val(payText)
                            modalReceive.removeClass('open');
                        });
                    });

                });
                
            } else {
                console.log('Form pay : ' + formPay.length);   
                console.log('Form receive : ' + formReceive.length);      
            }
        }
        init();
    };

    function animationEl() {
        const animItem = document.querySelectorAll('.anim-item');        

        if(animItem.length > 0) {
            console.log('Anim item : ' + animItem.length);

            window.addEventListener('scroll', animOnScroll);

            function animOnScroll() {
                for (let i = 0; i < animItem.length; i++) {
                    const animEl = animItem[i];
                    const animElH = animEl.offsetHeight;
                    const animElO = offset(animEl).top;
                    const animElStart = 1.01;
                    
                    let animElPoint = window.innerHeight - animElH / animElStart;
                    if (animElH > window.innerHeight) {
                        animElPoint = window.innerHeight - window.innerHeight / animElStart;
                    };
                    
                    if ((pageYOffset > animElO - animElPoint) && pageYOffset < (animElO + animElH)) {
                        animEl.classList.add('anim-item_active');
                    } else {
                        animEl.classList.remove('anim-item_active');
                    }
                }
            };
            function offset(el) {
                const 
                    rect = el.getBoundingClientRect(),
                    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                return {
                    top:    rect.top + scrollTop,
                    left:   rect.left + screenLeft
                }
            };

        } else {
            console.log('Anim item : ' + animItem.length);
        }
    };

    createGoodMenu();
    mainFunction();
    // animationEl();
    

    body.addClass('overflow-active');
});

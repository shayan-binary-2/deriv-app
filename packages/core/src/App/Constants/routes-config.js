import React from 'react';
import { Redirect as RouterRedirect } from 'react-router-dom';
import { getUrlBase, routes } from '@deriv/shared';

import { Localize } from '@deriv/translations';
import { makeLazyLoader } from '_common/lazy-load';
import { Redirect } from 'App/Containers/Redirect';
import Endpoint from 'Modules/Endpoint';

// Error Routes
const Page404 = React.lazy(() => import(/* webpackChunkName: "404" */ 'Modules/Page404'));

const Trader = React.lazy(() => {
    const el_head = document.querySelector('head');
    const el_main_css = document.createElement('link');
    el_main_css.href = getUrlBase('/css/trader.main.css');
    el_main_css.rel = 'stylesheet';
    el_main_css.type = 'text/css';
    el_head.appendChild(el_main_css);
    // eslint-disable-next-line import/no-unresolved
    return import(/* webpackChunkName: "trader" */ '@deriv/trader');
});

const Account = React.lazy(() => {
    const el_head = document.querySelector('head');
    const el_main_css = document.createElement('link');
    el_main_css.href = getUrlBase('/account/css/account.css');
    el_main_css.rel = 'stylesheet';
    el_main_css.type = 'text/css';
    el_head.appendChild(el_main_css);
    // eslint-disable-next-line import/no-unresolved
    return import(/* webpackChunkName: "account" */ '@deriv/account');
});

const Bot = React.lazy(() => {
    // eslint-disable-next-line import/no-unresolved
    return import(/* webpackChunkName: "bot" */ '@deriv/bot-web-ui');
});

const getModules = ({ is_deriv_crypto }) => {
    const modules = [
        {
            path: routes.bot,
            component: Bot,
            title: <Localize i18n_default_text='Bot' />,
        },
        {
            path: routes.account_deactivated,
            component: Account,
            title: <Localize i18n_default_text='Account deactivated' />,
        },
        {
            path: routes.account,
            component: Account,
            title: <Localize i18n_default_text='Accounts Settings' />,
            icon_component: 'IcUserOutline',
            is_authenticated: true,
            // TODO: Revisit this workaround for subroutes [app-routing]
            routes: [
                {
                    title: <Localize i18n_default_text='Profile' />,
                    icon: 'IcUserOutline',
                    subroutes: [
                        {
                            path: routes.personal_details,
                            component: Account,
                            title: <Localize i18n_default_text='Personal details' />,
                            default: true,
                        },
                        ...(is_deriv_crypto
                            ? []
                            : [
                                  {
                                      path: routes.financial_assessment,
                                      component: Account,
                                      title: <Localize i18n_default_text='Financial assessment' />,
                                  },
                              ]),
                    ],
                },
                ...(is_deriv_crypto
                    ? []
                    : [
                          {
                              title: <Localize i18n_default_text='Verification' />,
                              icon: 'IcVerification',
                              subroutes: [
                                  {
                                      path: routes.proof_of_identity,
                                      component: Account,
                                      title: <Localize i18n_default_text='Proof of identity' />,
                                  },
                                  {
                                      path: routes.proof_of_address,
                                      component: Account,
                                      title: <Localize i18n_default_text='Proof of address' />,
                                  },
                              ],
                          },
                      ]),
                {
                    title: <Localize i18n_default_text='Security and safety' />,
                    icon: 'IcSecurity',
                    subroutes: [
                        {
                            path: routes.deriv_password,
                            component: Account,
                            title: <Localize i18n_default_text='Deriv password' />,
                        },
                        {
                            path: routes.self_exclusion,
                            component: Account,
                            title: <Localize i18n_default_text='Self exclusion' />,
                        },
                        {
                            path: routes.account_limits,
                            component: Account,
                            title: <Localize i18n_default_text='Account limits' />,
                        },
                        {
                            path: routes.login_history,
                            component: Account,
                            title: <Localize i18n_default_text='Login history' />,
                        },
                        {
                            path: routes.api_token,
                            component: Account,
                            title: <Localize i18n_default_text='API token' />,
                        },
                        {
                            path: routes.connected_apps,
                            component: Account,
                            title: <Localize i18n_default_text='Connected apps' />,
                        },
                        {
                            path: routes.two_factor_authentication,
                            component: Account,
                            title: <Localize i18n_default_text='Two-factor authentication' />,
                        },
                        {
                            path: routes.deactivate_account,
                            component: Account,
                            title: <Localize i18n_default_text='Deactivate account' />,
                        },
                    ],
                },
            ],
        },
        {
            path: routes.root,
            component: Trader,
            title: <Localize i18n_default_text='Trader' />,
            routes: [
                {
                    path: routes.mt5,
                    component: Trader,
                    title: <Localize i18n_default_text='MT5' />,
                    is_authenticated: false,
                },
                {
                    path: routes.reports,
                    component: Trader,
                    title: <Localize i18n_default_text='Reports' />,
                    icon_component: 'IcReports',
                    is_authenticated: true,
                    routes: [
                        {
                            path: routes.positions,
                            component: Trader,
                            title: <Localize i18n_default_text='Open positions' />,
                            icon_component: 'IcOpenPositions',
                            default: true,
                        },
                        {
                            path: routes.profit,
                            component: Trader,
                            title: <Localize i18n_default_text='Profit table' />,
                            icon_component: 'IcProfitTable',
                        },
                        {
                            path: routes.statement,
                            component: Trader,
                            title: <Localize i18n_default_text='Statement' />,
                            icon_component: 'IcStatement',
                        },
                    ],
                },
                {
                    path: routes.contract,
                    component: Trader,
                    title: <Localize i18n_default_text='Contract Details' />,
                    is_authenticated: true,
                },
                { path: routes.error404, component: Trader, title: <Localize i18n_default_text='Error 404' /> },
            ],
        },
    ];

    return modules;
};

const lazyLoadCashierComponent = makeLazyLoader(() => import(/* webpackChunkName: "cashier" */ 'Modules/Cashier'));

const lazyLoadComplaintsPolicy = makeLazyLoader(() =>
    import(/* webpackChunkName: "complaints-policy" */ 'Modules/ComplaintsPolicy')
);

// Order matters
// TODO: search tag: test-route-parent-info -> Enable test for getting route parent info when there are nested routes
const initRoutesConfig = ({ is_deriv_crypto }) => [
    { path: routes.index, component: RouterRedirect, title: '', to: routes.root },
    { path: routes.endpoint, component: Endpoint, title: 'Endpoint' }, // doesn't need localization as it's for internal use
    { path: routes.redirect, component: Redirect, title: <Localize i18n_default_text='Redirect' /> },
    {
        path: routes.cashier,
        component: lazyLoadCashierComponent('Cashier'),
        is_modal: true,
        is_authenticated: true,
        title: <Localize i18n_default_text='Cashier' />,
        icon_component: 'IcCashier',
        routes: [
            {
                path: routes.cashier_deposit,
                component: lazyLoadCashierComponent('Deposit'),
                title: <Localize i18n_default_text='Deposit' />,
                icon_component: 'IcWalletAdd',
                default: true,
            },
            {
                path: routes.cashier_withdrawal,
                component: lazyLoadCashierComponent('Withdrawal'),
                title: <Localize i18n_default_text='Withdrawal' />,
                icon_component: 'IcWalletMinus',
            },
            ...(is_deriv_crypto
                ? []
                : [
                      {
                          path: routes.cashier_pa,
                          component: lazyLoadCashierComponent('PaymentAgent'),
                          title: <Localize i18n_default_text='Payment agents' />,
                          icon_component: 'IcPaymentAgent',
                      },
                  ]),
            {
                path: routes.cashier_acc_transfer,
                component: lazyLoadCashierComponent('AccountTransfer'),
                title: <Localize i18n_default_text='Transfer' />,
                icon_component: 'IcAccountTransfer',
            },
            ...(is_deriv_crypto
                ? []
                : [
                      {
                          path: routes.cashier_pa_transfer,
                          component: lazyLoadCashierComponent('PaymentAgentTransfer'),
                          title: <Localize i18n_default_text='Transfer to client' />,
                          icon_component: 'IcAccountTransfer',
                      },
                      {
                          path: routes.cashier_p2p,
                          component: lazyLoadCashierComponent('P2PCashier'),
                          title: <Localize i18n_default_text='DP2P' />,
                          icon_component: 'IcDp2p',
                      },
                  ]),
            {
                id: 'gtm-onramp-tab',
                path: routes.cashier_onramp,
                component: lazyLoadCashierComponent('OnRamp'),
                title: <Localize i18n_default_text='Fiat onramp' />,
                icon_component: 'IcCashierOnRamp',
            },
        ],
    },
    {
        path: routes.complaints_policy,
        component: lazyLoadComplaintsPolicy(),
        title: <Localize i18n_default_text='Complaints policy' />,
        icon_component: 'IcComplaintsPolicy',
        is_authenticated: true,
    },
    ...getModules({ is_deriv_crypto }),
];

let routesConfig;

// For default page route if page/path is not found, must be kept at the end of routes_config array
const route_default = { component: Page404, title: <Localize i18n_default_text='Error 404' /> };

// is_deriv_crypto = true as default to prevent route ui blinking
const getRoutesConfig = ({ is_deriv_crypto = true }) => {
    if (!routesConfig) {
        routesConfig = initRoutesConfig({ is_deriv_crypto });
        routesConfig.push(route_default);
    }
    return routesConfig;
};

export default getRoutesConfig;

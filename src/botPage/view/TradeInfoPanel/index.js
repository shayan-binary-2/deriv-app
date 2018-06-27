import React, { Component } from 'react';
import { observer as globalObserver } from 'binary-common-utils/lib/observer';
import { translate } from '../../../common/i18n';
import { tradePanelAccount } from '../style';
import Summary from './Summary';
import TradeTable from './TradeTable';

export default class TradeInfoPanel extends Component {
    constructor() {
        super();
        this.state = { accountID: '', accountIDList: [], currentAccountID: '' };
    }
    componentWillMount() {
        globalObserver.register('bot.info', ({ accountID }) => {
            const { accountIDList } = this.state;
            if (!accountIDList.includes(accountID)) {
                this.setState({ accountIDList: [...accountIDList, accountID] });
            }
            if (!this.state.accountID) {
                this.setState({ accountID });
            }
            this.setState({ currentAccountID: accountID });
        });
        globalObserver.register('contract.status', contractStatus => {
            this.setState({ contractStatus });
        });
    }
    render() {
        const { accountID, currentAccountID } = this.state;

        return (
            <div>
                <div className="content">
                    <div>
                        <label style={tradePanelAccount}>
                            {`${translate('Account')}: `}
                            <select
                                value={accountID}
                                rel={el => (this.accountIDDropdown = el)}
                                onChange={e => this.setState({ accountID: e.target.value })}
                            >
                                {this.state.accountIDList.map(account => (
                                    <option value={account}>
                                        {`${account}${
                                            account !== currentAccountID ? ` - ${translate('Stopped')}` : ''
                                        }`}
                                    </option>
                                ))}
                            </select>
                        </label>
                        <h4>
                            <span>{translate('Summary')}</span>
                        </h4>

                        <Summary accountID={accountID} />
                    </div>
                    <div>
                        <h4>
                            <span>{translate('Trades')}</span>
                        </h4>

                        <TradeTable accountID={accountID} />
                        <p id="sync-warning">
                            {translate(
                                'Stopping the bot will prevent further trades. Any ongoing trades will be completed by our system. Please be aware that some completed transactions may not be displayed in the table if the bot is stopped while placing trades. You may refer to the Binary.com statement page for details of all completed transactions.'
                            )}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

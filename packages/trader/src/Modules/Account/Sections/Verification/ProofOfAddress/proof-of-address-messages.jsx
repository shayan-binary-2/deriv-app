import React from 'react';
import { Button, Icon } from '@deriv/components';
import ButtonLink from 'App/Components/Routes/button-link.jsx';
import { localize, Localize } from '@deriv/translations';
import IconMessageContent from '../../../Components/icon-message-content.jsx';

const ContinueTradingButton = () => (
    <ButtonLink to='/'>
        <p className='dc-btn__text'>{localize('Continue trading')}</p>
    </ButtonLink>
);
const PoiButton = () => (
    <ButtonLink to='/account/proof-of-identity'>
        <p className='dc-btn__text'>{localize('Submit proof of identity')}</p>
    </ButtonLink>
);

export const Expired = ({ onClick }) => (
    <IconMessageContent
        message={localize('New proof of address is needed')}
        text={localize('Your documents for proof of address is expired. Please submit again.')}
        icon={<Icon icon='IcPoaUpload' size={128} />}
    >
        <Button onClick={onClick} has_effect primary>
            <p className='dc-btn__text'>{localize('Resubmit')}</p>
        </Button>
    </IconMessageContent>
);

export const NeedsReview = () => (
    <IconMessageContent
        message={localize('Your proof of address was submitted successfully')}
        text={localize('Your document is being reviewed, please check back in 1-3 days.')}
        icon={<Icon icon='IcPoaVerified' size={128} />}
    >
        <ContinueTradingButton />
    </IconMessageContent>
);

export const Submitted = ({ needs_poi }) => {
    const message = localize('Your proof of address was submitted successfully');
    if (needs_poi) {
        return (
            <IconMessageContent message={message} icon={<Icon icon='IcPoaVerified' size={128} />}>
                <div className='account-management__text-container'>
                    <p className='account-management__text'>
                        {localize('Your document is being reviewed, please check back in 1-3 days.')}
                    </p>
                    <p className='account-management__text'>{localize('You must also submit a proof of identity.')}</p>
                </div>
                <PoiButton />
            </IconMessageContent>
        );
    }
    return (
        <IconMessageContent
            message={message}
            text={localize('Your document is being reviewed, please check back in 1-3 days.')}
            icon={<Icon icon='IcPoaVerified' size={128} />}
        >
            <ContinueTradingButton />
        </IconMessageContent>
    );
};

export const Verified = ({ needs_poi }) => {
    const message = localize('Your proof of address is verified');
    if (needs_poi) {
        return (
            <IconMessageContent
                message={message}
                text={localize('To continue trading, you must also submit a proof of identity.')}
                icon={<Icon icon='IcPoaVerified' size={128} />}
            >
                <PoiButton />
            </IconMessageContent>
        );
    }
    return (
        <IconMessageContent message={message} icon={<Icon icon='IcPoaVerified' size={128} />}>
            <ContinueTradingButton />
        </IconMessageContent>
    );
};

export const Unverified = () => (
    <IconMessageContent
        message={localize('We could not verify your proof of address')}
        text={
            <Localize
                i18n_default_text='Please check your email for details.'
                // TODO: enable link to Help Center when POA help content is ready
                // i18n_default_text='Please check your email for details. If you have any questions, please go to our <0>Help Centre</0>.'
                // components={[
                //     <a key={0} className='link link--orange' rel='noopener noreferrer' target='_blank' href='https://www.deriv.com/help-centre/' />,
                // ]}
            />
        }
        icon={<Icon icon='IcPoaError' size={128} />}
    />
);

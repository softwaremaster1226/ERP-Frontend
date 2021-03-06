import React from 'react';

import FormGroup from '../../common/FormGroup';

export default function Dynamic(props) {
    return(
        <React.Fragment>
            <div className="p-2 text-base font-semibold text-gray-dark">Sabit Fazla Mesailer</div>

            <div className="grid grid-cols-1 lg:grid-cols-3 py-1 px-2 gap-x-6">
                <div>
                    <FormGroup label="Özel Kod 1" icon={require('../../../images/icons/angle-down.png')}>
                        <select className="cs-input appearance-none"></select>
                    </FormGroup>

                    <FormGroup label="Özel Kod 2" icon={require('../../../images/icons/search.png')}>
                        <input className="cs-input pr-8" />
                    </FormGroup>

                    <FormGroup label="Özel Kod 3" icon={require('../../../images/icons/calculator.png')}>
                        <input className="cs-input pr-8" />
                    </FormGroup>

                    <FormGroup label="Özel Kod 4" icon={require('../../../images/icons/calendar.png')}>
                        <input className="cs-input pr-8" />
                    </FormGroup>
                </div>
            </div>
        </React.Fragment>
    );
}
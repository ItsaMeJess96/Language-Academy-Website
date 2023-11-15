import React from 'react';
import FullCalendar from '@fullcalendar/react'; 
import dayGridPlugin from '@fullcalendar/daygrid'; //plugin que permite visualização do calendário
import ptLocale from '@fullcalendar/core/locales/pt'; //plugin para mudar texto para pt-pt

export default class DemoApp extends React.Component {
    render() {
        return (
            <FullCalendar 

                plugins={[ dayGridPlugin ]} //configurar plugins utilizados
                locales={[ptLocale]} //configura idioma para pt
                locale="pt" //define idioma
                initialView='dayGridMonth'//visualização inicial do calendário
                editable={false} //Não permite editar eventos
                selectable={false} //Não permite selecionar datas

            />
        )
    }
};
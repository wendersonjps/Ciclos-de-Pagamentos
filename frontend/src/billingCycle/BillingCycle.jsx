/* import React, { Component } from 'react' */

import ContentHeader from '../common/template/ContentHeader'
import Content from '../common/template/Content'
import Tab from '../common/tab/Tabs'
import TabsHeader from '../common/tab/TabsHeader'
import TabContent from '../common/tab/TabContent'

class BillingCycle extends Component {
    render() {
        return (
            <div>
                <ContentHeader title='Ciclos de Pagamentos' subtitle='Cadastro' />
                <Content>
                    <Tabs>
                        <TabsHeader>

                        </TabsHeader>
                        <TabContent>
                            
                        </TabContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

export default BillingCycle
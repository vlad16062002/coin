import React from 'react';
import {connect} from 'react-redux';

import {closePopout, goBack, openModal, openPopout, setPage} from '../../store/router/actions';

import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import Alert from '@vkontakte/vkui/dist/components/Alert/Alert';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';

class HomePanelBase extends React.Component {

    state = {
        showImg: false
    };

    showImg = () => {
        this.setState({showImg: true});
    };

    openPopout() {
        this.props.openPopout(
            <Alert
                actions={[{
                    title: 'Нет',
                    autoclose: true,
                    style: 'cancel',
                }, {
                    title: 'Да',
                    autoclose: true,
                    action: this.showImg
                }]}
                onClose={() => this.props.closePopout()}
            >
                <h2>Вопрос значит</h2>
                <p>Вас роняли в детстве?</p>
            </Alert>
        );
    }

    render() {
        const {id, setPage, withoutEpic} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader>Examples</PanelHeader>
                <Group>
                    <Div>
                        <Button size="l" stretched={true} onClick={() => setPage('home', 'groups')}>Список моих
                            групп</Button>
                    </Div>
                    <Div>
                        <Button size="l" stretched={true} onClick={() => this.openPopout()}>Открыть алерт</Button>
                    </Div>
                    <Div>
                        <Button size="l" stretched={true} onClick={() => this.props.openModal("MODAL_PAGE_BOTS_LIST")}>Открыть
                            модальную страницу</Button>
                    </Div>
                    {withoutEpic && <Div>
                        <Button size="l" stretched={true} onClick={() => setPage('modal', 'filters')}>Открыть модальное окно</Button>
                    </Div>}
                    {this.state.showImg && <Div className="div-center">
                        <img src="https://vk.com/sticker/1-12676-256" alt="Стикер VK"/>
                    </Div>}
                    <Div>
                        <Button size="l" stretched={true} onClick={() => this.props.openModal("MODAL_PAGE_BOTS_LIST")}>Открыть
                            модальную страницу</Button>
                    </Div>                    <Div>
                    <Button size="l" stretched={true} onClick={() => this.props.openModal("MODAL_PAGE_BOTS_LIST")}>Открыть
                        модальную страницу</Button>
                </Div>                    <Div>
                    <Button size="l" stretched={true} onClick={() => this.props.openModal("MODAL_PAGE_BOTS_LIST")}>Открыть
                        модальную страницу</Button>
                </Div>                    <Div>
                    <Button size="l" stretched={true} onClick={() => this.props.openModal("MODAL_PAGE_BOTS_LIST")}>Открыть
                        модальную страницу</Button>
                </Div>                    <Div>
                    <Button size="l" stretched={true} onClick={() => this.props.openModal("MODAL_PAGE_BOTS_LIST")}>Открыть
                        модальную страницу</Button>
                </Div>                    <Div>
                    <Button size="l" stretched={true} onClick={() => this.props.openModal("MODAL_PAGE_BOTS_LIST")}>Открыть
                        модальную страницу</Button>
                </Div>                    <Div>
                    <Button size="l" stretched={true} onClick={() => this.props.openModal("MODAL_PAGE_BOTS_LIST")}>Открыть
                        модальную страницу</Button>
                </Div>                    <Div>
                    <Button size="l" stretched={true} onClick={() => this.props.openModal("MODAL_PAGE_BOTS_LIST")}>Открыть
                        модальную страницу</Button>
                </Div>                    <Div>
                    <Button size="l" stretched={true} onClick={() => this.props.openModal("MODAL_PAGE_BOTS_LIST")}>Открыть
                        модальную страницу</Button>
                </Div>                    <Div>
                    <Button size="l" stretched={true} onClick={() => this.props.openModal("MODAL_PAGE_BOTS_LIST")}>Открыть
                        модальную страницу</Button>
                </Div>                    <Div>
                    <Button size="l" stretched={true} onClick={() => this.props.openModal("MODAL_PAGE_BOTS_LIST")}>Открыть
                        модальную страницу</Button>
                </Div>                    <Div>
                    <Button size="l" stretched={true} onClick={() => this.props.openModal("MODAL_PAGE_BOTS_LIST")}>Открыть
                        модальную страницу</Button>
                </Div>                    <Div>
                    <Button size="l" stretched={true} onClick={() => this.props.openModal("MODAL_PAGE_BOTS_LIST")}>Открыть
                        модальную страницу</Button>
                </Div>                    <Div>
                    <Button size="l" stretched={true} onClick={() => this.props.openModal("MODAL_PAGE_BOTS_LIST")}>Открыть
                        модальную страницу</Button>
                </Div>                    <Div>
                    <Button size="l" stretched={true} onClick={() => this.props.openModal("MODAL_PAGE_BOTS_LIST")}>Открыть
                        модальную страницу</Button>
                </Div>                    <Div>
                    <Button size="l" stretched={true} onClick={() => this.props.openModal("MODAL_PAGE_BOTS_LIST")}>Открыть
                        модальную страницу</Button>
                </Div>                    <Div>
                    <Button size="l" stretched={true} onClick={() => this.props.openModal("MODAL_PAGE_BOTS_LIST")}>Открыть
                        модальную страницу</Button>
                </Div>                    <Div>
                    <Button size="l" stretched={true} onClick={() => this.props.openModal("MODAL_PAGE_BOTS_LIST")}>Открыть
                        модальную страницу</Button>
                </Div>                    <Div>
                    <Button size="l" stretched={true} onClick={() => this.props.openModal("MODAL_PAGE_BOTS_LIST")}>Открыть
                        модальную страницу</Button>
                </Div>                    <Div>
                    <Button size="l" stretched={true} onClick={() => this.props.openModal("MODAL_PAGE_BOTS_LIST")}>Открыть
                        модальную страницу</Button>
                </Div>                    <Div>
                    <Button size="l" stretched={true} onClick={() => this.props.openModal("MODAL_PAGE_BOTS_LIST")}>Открыть
                        модальную страницу</Button>
                </Div>                    <Div>
                    <Button size="l" stretched={true} onClick={() => this.props.openModal("MODAL_PAGE_BOTS_LIST")}>Открыть
                        модальную страницу</Button>
                </Div>                    <Div>
                    <Button size="l" stretched={true} onClick={() => this.props.openModal("MODAL_PAGE_BOTS_LIST")}>Открыть
                        модальную страницу</Button>
                </Div>                    <Div>
                    <Button size="l" stretched={true} onClick={() => this.props.openModal("MODAL_PAGE_BOTS_LIST")}>Открыть
                        модальную страницу</Button>
                </Div>                    <Div>
                    <Button size="l" stretched={true} onClick={() => this.props.openModal("MODAL_PAGE_BOTS_LIST")}>Открыть
                        модальную страницу</Button>
                </Div>                    <Div>
                    <Button size="l" stretched={true} onClick={() => this.props.openModal("MODAL_PAGE_BOTS_LIST")}>Открыть
                        модальную страницу</Button>
                </Div>                    <Div>
                    <Button size="l" stretched={true} onClick={() => this.props.openModal("MODAL_PAGE_BOTS_LIST")}>Открыть
                        модальную страницу</Button>
                </Div>                    <Div>
                    <Button size="l" stretched={true} onClick={() => this.props.openModal("MODAL_PAGE_BOTS_LIST")}>Открыть
                        модальную страницу</Button>
                </Div>                    <Div>
                    <Button size="l" stretched={true} onClick={() => this.props.openModal("MODAL_PAGE_BOTS_LIST")}>Открыть
                        модальную страницу</Button>
                </Div>                    <Div>
                    <Button size="l" stretched={true} onClick={() => this.props.openModal("MODAL_PAGE_BOTS_LIST")}>Открыть
                        модальную страницу</Button>
                </Div>
                </Group>
            </Panel>
        );
    }

}

const mapDispatchToProps = {
    setPage,
    goBack,
    openPopout,
    closePopout,
    openModal
};

export default connect(null, mapDispatchToProps)(HomePanelBase);
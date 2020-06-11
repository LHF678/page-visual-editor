import Vue from 'vue';
import { Container, Header, Aside, Main, Message, Button, ButtonGroup } from 'element-ui';

Vue.prototype.$ELEMENT = { size: 'medium' };
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Button);
Vue.use(ButtonGroup);

Vue.prototype.$message = Message;

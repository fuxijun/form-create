import createFormCreate, {_vue as Vue} from './core/formCreate';
import Creator, {creatorFactory, creatorTypeFactory} from './factory/creator';
import Handle from './core/handle';
import makerFactory from './factory/maker';
import Render from './core/render';
import VData from './factory/vData';
import VNode from './factory/vNode';
import BaseParser from './factory/parser';
import BaseForm from './factory/form';

export {
    creatorFactory, creatorTypeFactory, Creator, BaseForm,
    Handle, makerFactory, Render, VData, VNode, Vue, BaseParser
};

export default createFormCreate;
import { Serializer as ГотТоварSerializer } from
  '../mixins/regenerated/serializers/i-i-s-proektirovanie-гот-товар';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ГотТоварSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});

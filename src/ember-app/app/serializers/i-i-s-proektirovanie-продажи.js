import { Serializer as ПродажиSerializer } from
  '../mixins/regenerated/serializers/i-i-s-proektirovanie-продажи';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПродажиSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});

import { Move_learn_method } from "./IMove_learn_method";
import { Version_group } from "./IVersion_group";
/**
 * Interface para modelar objetos Region
 */
export interface VersionGroupDetail{
    level_learned_at:Number,
    move_learn_method:Move_learn_method,
    version_group: Version_group
}
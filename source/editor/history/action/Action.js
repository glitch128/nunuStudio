"use strict";

/**
 * Action defines the interface to apply and revert a history state.
 *
 * Actions are inserted and managed by a History object.
 * 
 * @class Action
 */
function Action()
{
	this.id = 0;
}

/** 
 * Apply the action.
 *
 * Change objects, update the editor and send data to server.
 *
 * @method apply
 */
Action.prototype.apply = function(){};

/** 
 * Revert the action.
 *
 * Change objects, update the editor and send data to server.
 *
 * @method revert
 */
Action.prototype.revert = function(){};

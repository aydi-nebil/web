odoo.define('web_tree_no_open.views', function (require) {
	"use strict";

	var core = require('web.core');
	var List = require('web.ListRenderer');
    List.include({
        _onRowClicked:function(e){
            if(!this.el.classList.contains('tree_no_open')){
                this._super.apply(this,arguments);
            }
        }
    });
});


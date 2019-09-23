odoo.define('web_tree_no_open.views', function (require) {
	"use strict";

	var ListView = require('web.ListView');

    ListView.List.include({
        row_clicked: function (e, view) {
            if( this.view.is_action_enabled('open') )
                this._super.apply(this, arguments);
        },
    });

});

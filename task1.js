// Copyright (c) 2023, HMB and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Task1", {
// 	refresh(frm) {

// 	},
// });
frappe.ui.form.on('Task1', {
    refresh: function(frm) {
        frm.add_custom_button('Report', function() {
            // Redirect to the report route
            frappe.set_route('query-report', 'Gross Profit');
        });
        // Add a custom button to the form
        frm.add_custom_button('Add Data', function() {
            // Create a new dialog
            var dialog = new frappe.ui.Dialog({
                title: 'Add Data',
                fields: [
                    {
                        fieldtype: 'Data',
                        fieldname: 'name',
                        label: 'Name'
                    },
                    {
                        fieldtype: 'Date',
                        fieldname: 'd.o.b',
                        label: 'D.O.B'
                    }
                ],
                primary_action: function() {
                    var values = dialog.get_values();
                    if (values) {
                        // Update main form fields based on popup values
                        if ( values.name){
                            frm.set_value('name1', values.name);
                        }                 
                        if ( values.d.o.b) 
                        {
                            frm.set_value('dob', values.d.o.b);
                        }   
                       
                        dialog.hide();
                    }
                },
                primary_action_label: 'Save'
            });

            dialog.show();
        });
    }
});

frappe.ui.form.on('Task1', {
    refresh: function(frm) {
        // Set query filters on a link field
        frm.set_query('customer', function() {
            return {
                filters: {
                    'customer_group': 'Individual'
                }
            };
        });
    }
});

frappe.ui.form.on('Task1', {
    refresh: function(frm) {
        // Set custom query method on a link field
        frm.set_query('customer', function() {
            return {
                query: 'fschool_app.fschool_app.doctype.task1.task1.get_custom_query',
                filters: {
                    'param1': 'value1',
               
                }
            };
        });
    }
});

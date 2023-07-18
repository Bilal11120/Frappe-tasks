// Copyright (c) 2023, HMB and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Task2", {
// 	refresh(frm) {

// 	},
// });
// Copyright (c) 2023, HMB and contributors

frappe.ui.form.on('Task2', {
    onload: function(frm) {
        // Code to execute on form 
        frm.toggle_display('cnic', false);
    },
    
    first_name: function(frm) 
    {
        // Check the condition and hide/show the field
        if (frm.doc.first_name) {
            frm.toggle_display('cnic', 1);
            frm.set_df_property('country', 'reqd', 1);
        } else {
            frm.toggle_display('cnic', 0);
            frm.set_df_property('country', 'reqd', 0);
        }
        
        frm.refresh_fields();
    },
    
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
                        fieldname: 'first_name',
                        label: 'Name'
                    },
                    {
                        fieldtype: 'Date',
                        fieldname: 'cnic',
                        label: 'CNIC'
                    }
                ],
                primary_action: function() {
                    var values = dialog.get_values();
                    if (values) {
                        // Update main form fields based on popup values
                        if ( values.name){
                            frm.set_value('first_name', values.first_name);
                        }                 
                        if ( values.d.o.b) 
                        {
                            frm.set_value('cnic', values.cnic);
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

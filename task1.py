# Copyright (c) 2023, HMB and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class Task1(Document):
    def validate(self):
        self.set_custom_query('customer', self.get_custom_query)
@frappe.whitelist()
def get_custom_query():
        return '''
            SELECT
                `tabCustomer`.name, `tabCustomer`.territory
            FROM
                `tabCustomer`
            WHERE
                `tabCustomer`.territory = %(filter_value)s
        '''
@frappe.whitelist()
def get_custom_query_filters(self):
        return {
            'filter_value': 'your_filter_value'
        }

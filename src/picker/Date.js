/**
A date picker component which shows a Date Picker on the screen. This class extends from {@link Ext.picker.Picker}
and {@link Ext.Sheet} so it is a popup.

This component has no required configurations.
## Examples
    @example preview
    var datePicker = Ext.create('Ext.picker.Date');
    datePicker.show();

You may want to adjust the {@link #yearFrom} and {@link #yearTo} properties:

    @example preview
    var datePicker = Ext.create('Ext.picker.Date', {
        yearFrom: 2000,
        yearTo  : 2015
    });
    datePicker.show();

You can set the value of the {@link Ext.picker.Date} to the current date using `new Date()`:

    @example preview
    var datePicker = Ext.create('Ext.picker.Date', {
        value: new Date()
    });
    datePicker.show();

And you can hide the titles from each of the slots by using the {@link #useTitles} configuration:

    @example preview
    var datePicker = Ext.create('Ext.picker.Date', {
        useTitles: false
    });
    datePicker.show();

 */
Ext.define('Ext.picker.Date', {
    extend: 'Ext.picker.Picker',
    xtype: 'datepicker',
    alternateClassName: 'Ext.DatePicker',
    requires: ['Ext.DateExtras'],

    config: {
        /**
         * @cfg {Number} yearFrom
         * The start year for the date picker.
         * @accessor
         */
        yearFrom: 1980,

        /**
         * @cfg {Number} yearTo
         * The last year for the date picker.
         * @default the current year (new Date().getFullYear())
         * @accessor
         */
        yearTo: new Date().getFullYear(),

        /**
         * @cfg {String} monthText
         * The label to show for the month column.
         * @accessor
         */
        monthText: 'Month',

        /**
         * @cfg {String} dayText
         * The label to show for the day column.
         * @accessor
         */
        dayText: 'Day',

        /**
         * @cfg {String} yearText
         * The label to show for the year column.
         * @accessor
         */
        yearText: 'Year',

        /**
         * @cfg {Array} slotOrder
         * An array of strings that specifies the order of the slots.
         * @accessor
         */
        slotOrder: ['month', 'day', 'year']

        /**
         * @cfg {Object/Date} value
         * Default value for the field and the internal {@link Ext.picker.Date} component. Accepts an object of 'year',
         * 'month' and 'day' values, all of which should be numbers, or a {@link Date}.
         *
         * Examples:
         * {year: 1989, day: 1, month: 5} = 1st May 1989.
         * new Date() = current date
         * @accessor
         */
        
        /**
         * @cfg {Boolean} useTitles
         * Generate a title header for each individual slot and use
         * the title configuration of the slot.
         * @accessor
         */

        /**
         * @cfg {Array} slots
         * @hide
         * @accessor
         */
    },

    setValue: function(value, animated) {
        if (Ext.isDate(value)) {
            value = {
                day  : value.getDate(),
                month: value.getMonth() + 1,
                year : value.getFullYear()
            };
        }

        this.callParent([value, animated]);
    },

    getValue: function() {
        var values = {},
            daysInMonth, day,
            items = this.getItems().items,
            ln = items.length,
            item, i;

        for (i = 0; i < ln; i++) {
            item = items[i];
            if (item instanceof Ext.picker.Slot) {
                values[item.getName()] = item.getValue();
            }
        }

        daysInMonth = this.getDaysInMonth(values.month, values.year);
        day = Math.min(values.day, daysInMonth);

        return new Date(values.year, values.month - 1, day);
    },

    /**
     * Updates the yearFrom configuration
     */
    updateYearFrom: function() {
        if (this.initialized) {
            this.createSlots();
        }
    },

    /**
     * Updates the yearTo configuration
     */
    updateYearTo: function() {
        if (this.initialized) {
            this.createSlots();
        }
    },

    /**
     * Updates the monthText configuration
     */
    updateMonthText: function(newMonthText, oldMonthText) {
        var innerItems = this.getInnerItems,
            ln = innerItems.length,
            item, i;
        
        //loop through each of the current items and set the title on the correct slice
        if (this.initialized) {
            for (i = 0; i < ln; i++) {
                item = innerItems[i];

                if ((typeof item.title == "string" && item.title == oldMonthText) || (item.title.html == oldMonthText)) {
                    item.setTitle(newMonthText);
                }
            }
        }
    },

    /**
     * Updates the dayText configuraton
     */
    updateDayText: function(newDayText, oldDayText) {
        var innerItems = this.getInnerItems,
            ln = innerItems.length,
            item, i;

        //loop through each of the current items and set the title on the correct slice
        if (this.initialized) {
            for (i = 0; i < ln; i++) {
                item = innerItems[i];

                if ((typeof item.title == "string" && item.title == oldDayText) || (item.title.html == oldDayText)) {
                    item.setTitle(newDayText);
                }
            }
        }
    },

    /**
     * Updates the yearText configuration
     */
    updateYearText: function(yearText) {
        var innerItems = this.getInnerItems,
            ln = innerItems.length,
            item, i;

        //loop through each of the current items and set the title on the correct slice
        if (this.initialized) {
            for (i = 0; i < ln; i++) {
                item = innerItems[i];

                if (item.title == this.yearText) {
                    item.setTitle(yearText);
                }
            }
        }
    },

    // @private
    constructor: function() {
        this.callParent(arguments);
        this.createSlots();
    },

    /**
     * Generates all slots for all years specified by this component, and then sets them on the component
     * @private
     */
    createSlots: function() {
        var me        = this,
            slotOrder = this.getSlotOrder(),
            yearsFrom = me.getYearFrom(),
            yearsTo   = me.getYearTo(),
            years     = [],
            days      = [],
            months    = [],
            ln, tmp, i,
            daysInMonth;

        // swap values if user mixes them up.
        if (yearsFrom > yearsTo) {
            tmp = yearsFrom;
            yearsFrom = yearsTo;
            yearsTo = tmp;
        }

        for (i = yearsFrom; i <= yearsTo; i++) {
            years.push({
                text: i,
                value: i
            });
        }

        daysInMonth = this.getDaysInMonth(1, new Date().getFullYear());

        for (i = 0; i < daysInMonth; i++) {
            days.push({
                text: i + 1,
                value: i + 1
            });
        }

        for (i = 0, ln = Ext.Date.monthNames.length; i < ln; i++) {
            months.push({
                text: Ext.Date.monthNames[i],
                value: i + 1
            });
        }

        var slots = [];

        slotOrder.forEach(function(item) {
            slots.push(this.createSlot(item, days, months, years));
        }, this);

        me.setSlots(slots);
    },

    /**
     * Returns a slot config for a specified date.
     * @private
     */
    createSlot: function(name, days, months, years) {
        switch (name) {
            case 'year':
                return {
                    name: 'year',
                    align: 'center',
                    data: years,
                    title: this.getYearText(),
                    flex: 3
                };
            case 'month':
                return {
                    name: name,
                    align: 'right',
                    data: months,
                    title: this.getMonthText(),
                    flex: 4
                };
            case 'day':
                return {
                    name: 'day',
                    align: 'center',
                    data: days,
                    title: this.getDayText(),
                    flex: 2
                };
        }
    },

    // @private
    getDaysInMonth: function(month, year) {
        var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        return month == 2 && this.isLeapYear(year) ? 29 : daysInMonth[month-1];
    },

    // @private
    isLeapYear: function(year) {
        return !!((year & 3) === 0 && (year % 100 || (year % 400 === 0 && year)));
    }
});

import { TRACKABLE_EVENT } from './constants/trackableEvents';

/**
 * Provide methods to send optional analytics events
 *
 * Exported as a singleton
 *
 * @class EventTracker
 */
class EventTracker {
    /**
     * @for EventTracker
     * @constructor
     */
    constructor() {
        if (!this._isEnabled()) {
            return;
        }

        this._gtag = window.gtag;
    }

    /**
     * Send a custom analytics event
     *
     * @for EventTracker
     * @method recordEvent
     * @param category {TRACKABLE_EVENT}
     * @param action {string}
     * @param label {string}
     * @param value {string|null} [optional]
     */
    recordEvent(category, action, label, value = null) {
        if (!this._isEnabled()) {
            return;
        }

        const event = {
            event_category: category,
            event_action: action,
            event_label: label
        };

        if (value) {
            event.value = value;
        }

        return this._gtag('event', event.event_category, event);
    }

    /**
     * Track a click on an outbound link
     *
     * @for EventTracker
     * @method recordClickOnOutboundLink
     * @param url {string}
     */
    recordClickOnOutboundLink(url) {
        if (!this._isEnabled()) {
            return;
        }

        const event = {
            event_category: TRACKABLE_EVENT.OUTBOUND,
            event_label: url,
            transport_type: 'beacon'
        };

        return this._gtag('event', 'click', event);
    }

    /**
     * @private
     * @method _isEnabled
     * @returns {boolean}
     */
    _isEnabled() {
        return typeof window.gtag === 'function';
    }
}

export default new EventTracker();

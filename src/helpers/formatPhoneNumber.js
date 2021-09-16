export function formatPhoneNumber(phoneNumberString) {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    var match = cleaned.match(/^(55|)?(\d{2})(\d{5})(\d{4})$/);
    if (match) {
        var intlCode = match[1] ? '+55 ' : '';
        return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join(
            '',
        );
    }
    return null;
}

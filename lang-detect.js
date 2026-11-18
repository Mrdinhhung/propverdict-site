(function () {
  try {
    if (localStorage.getItem('pv_lang')) return;
    var isEn = location.pathname.indexOf('/en/') === 0 || location.pathname.indexOf('/en') === 0;
    fetch('https://ipwho.is/', { cache: 'no-store' })
      .then(function (r) { return r.json(); })
      .then(function (data) {
        var cc = data && data.country_code;
        if (!cc) return;
        if (cc === 'VN') {
          localStorage.setItem('pv_lang', 'vi');
          if (isEn) location.replace('/');
        } else {
          localStorage.setItem('pv_lang', 'en');
          if (!isEn) location.replace('/en/');
        }
      })
      .catch(function () {});
  } catch (e) {}
})();

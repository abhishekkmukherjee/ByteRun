
        function compile() {
            var html = document.getElementById("htmlCode").value;
            var css = document.getElementById("cssCode").value;
            var js = document.getElementById("jsCode").value;
            var code = document.getElementById("output").contentWindow.document;

            code.open();
            code.write(html + "<style>" + css + "</style>" + "<script>" + js + "</" + "script>");
            code.close();
        }

        document.getElementById("htmlCode").addEventListener("keyup", compile);
        document.getElementById("cssCode").addEventListener("keyup", compile);
        document.getElementById("jsCode").addEventListener("keyup", compile);

        function copyContent(id) {
            var content = document.getElementById(id).value;
            navigator.clipboard.writeText(content).then(() => {
                alert('Copied to clipboard!');
            });
        }

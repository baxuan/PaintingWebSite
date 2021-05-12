var sections = Array.from(document.getElementsByTagName("section")); 
sections.forEach 
(
    section=>section.addEventListener
    (
        "mouseenter", 
        function()
        {
            document.getElementById("menu").querySelectorAll("a").forEach(a=>a.classList.remove("text-danger")); 
            try 
            {
                document.getElementById("menu").querySelector(`a[href='#${this.id}']`).classList.add("text-danger"); 
            }
            catch {}
        }
    )
); 
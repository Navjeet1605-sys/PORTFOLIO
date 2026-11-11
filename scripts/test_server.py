import urllib.request

try:
    with urllib.request.urlopen('http://localhost:4173/') as resp:
        html = resp.read().decode('utf-8')
        print("Root Status:", resp.status)
        print("HTML Length:", len(html))
        print("Contains root div:", '<div id="root"></div>' in html)
        print("Title confirmed:", 'Navjeet Sinha' in html)

    with urllib.request.urlopen('http://localhost:4173/navjeet-avatar.jpg') as resp:
        print("Avatar status:", resp.status, "Length:", len(resp.read()))

    with urllib.request.urlopen('http://localhost:4173/Navjeet_Sinha_Resume.pdf') as resp:
        print("Resume status:", resp.status, "Length:", len(resp.read()))
except Exception as e:
    print("Test error:", e)


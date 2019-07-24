---
title: Tools
description: Common used tools and their customization
---

# Common Tools

|Check                    |Name               |Comment
|-------------------------|-------------------|-------
|<input type="checkbox"/> |[Adobe Reader]     |Disable automatic update
|<input type="checkbox"/> |[CCCP Codec]       |
|<input type="checkbox"/> |[Eclipse]          |
|<input type="checkbox"/> |[cURL]             |Add `<cURL_HOME>\bin` to the PATH environment variable. [Usage](https://curl.haxx.se/docs/manual.html)
|<input type="checkbox"/> |[Git]              |
|<input type="checkbox"/> |[Google Drive]     |Disable automatic update
|<input type="checkbox"/> |[Java SE]          |Disable automatic update. Create `JAVA_HOME` environment variable (required by Maven)
|<input type="checkbox"/> |[jPdfTweak]        |
|<input type="checkbox"/> |[Maven]            |Add `<Maven_HOME>\bin` to the PATH environment variable
|<input type="checkbox"/> |[MySQL]            |[Installation and configuration]({% link docs/database/mysql.md %})
|<input type="checkbox"/> |[Notepad++]        |[Configuration](#notepad-configuration)
|<input type="checkbox"/> |[MS Office]        |CRDTLS
|<input type="checkbox"/> |[Process Explorer] |
|<input type="checkbox"/> |[Tomcat]           |Create environment variable `CATALINA_HOME`. Require its own configuration section
|<input type="checkbox"/> |[WinRAR]           |Replacing `<WinRAR_HOME>\rarreg.key` with the valid one (stored in Google Drive)
|<input type="checkbox"/> |[XSDDiagram]       |

[Adobe Reader]: https://acrobat.adobe.com/au/en/acrobat/pdf-reader.html
[CCCP Codec]: http://www.cccp-project.net
[Eclipse]: {% link docs/tools/eclipse.md %}
[cURL]: https://winampplugins.co.uk/curl
[Git]: {% link docs/tools/git.md %}
[Google Drive]: https://www.google.com.au/drive/download
[Java SE]: https://www.oracle.com/technetwork/java/javase/downloads/index.html
[jPdfTweak]: http://jpdftweak.sourceforge.net
[Maven]: http://maven.apache.org/download.cgi
[MySQL]: https://dev.mysql.com/downloads/mysql
[Notepad++]: https://notepad-plus-plus.org
[MS Office]: https://login.microsoftonline.com
[Process Explorer]: https://docs.microsoft.com/en-us/sysinternals/downloads/process-explorer
[Tomcat]: http://tomcat.apache.org/index.html
[WinRAR]: https://www.rarlab.com/download.htm
[XSDDiagram]: http://regis.cosnier.free.fr/?page=XSDDiagram

# Notepad++ Configuration
1. Install [Plugin Manager](https://github.com/bruderstein/nppPluginManager/releases), unzip into `<NPP_HOME>`
1. Install the following recommended plug-ins
   * Compare
   * XML Tools (disable auto-check and auto-validation)
   * JSTool
   * Npp XML Treeview
   * MarkdownViewer++
1. Install the following recommended syntax highlighter from [npp-customization](https://github.com/hongwise/npp-customization/tree/master/udl)
   * udl_groovy.xml
   * udl_markdown.xml
   * udl_sass.xml
   * udl_txt.xml

Learn user defined syntax from [here](https://udl20.weebly.com/delimiters.html).
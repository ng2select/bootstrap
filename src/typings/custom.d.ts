/// <reference path="jquery/index.d.ts" />

declare module 'highlight.js' {

    export = hljs;
    
    interface hljs {
        initHighlightingOnLoad();
    }

}
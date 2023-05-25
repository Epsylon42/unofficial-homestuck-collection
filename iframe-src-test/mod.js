const component = {
    title: () => 'IFrame src test',

    methods: {
        erase() {
            this.$refs.container.querySelector('iframe').src = ''
        },

        srcset() {
            this.$refs.container.querySelector('iframe').src = 'assets://iframe-src-test/iframe.html'
        },

        setattr() {
            this.$refs.container.querySelector('iframe').setAttribute('src', 'assets://iframe-src-test/iframe.html')
        },

        innerHTML() {
            this.$refs.container.innerHTML = '<iframe src="assets://iframe-src-test/iframe.html"></iframe>'
        },
    },

    template: String.raw`
<div class="root">
    <h1>IFrame src test</h1>

    <p>
        asset url: <a>assets://iframe-src-test/iframe.html</a>
    </p>

    <div ref="container" class="iframe-container">
        <iframe src="assets://iframe-src-test/iframe.html"></iframe>
    </div>

    <button @click="erase">Erase URL</button>
    <button @click="srcset">src setter</button>
    <button @click="setattr">setAttribute</button>
    <button @click="innerHTML">innerHTML</button>
</div>
`
}

module.exports = {
    title: 'IFrame src test',

    routes: {
        'assets://iframe-src-test/iframe.html': './iframe.html'
    },

    edit(archive) {
        archive.tweaks.modHomeRowItems.unshift({
            href: `/iframe-src-test`,
            title: 'IFrame src test'
        })
    },

    browserPages: {
        'IFRAME-SRC-TEST': {
            component
        }
    }
}

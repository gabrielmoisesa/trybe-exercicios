window.onload = () => {
    const setBackgroundColor = (color) => {
        let content = document.querySelector('.content')
        content.style.backgroundColor = color
        localStorage.setItem('backgroundColor', color)
    }
    const setFontColor = (color) => {
        let paragraphs = document.querySelectorAll('.paragraph')
        for (let i = 0; i < paragraphs.length; i += 1) {
            paragraphs[i].style.color = color
        }
        localStorage.setItem('fontColor', color)
    }
    const setFontSize = (size) => {
        let paragraphs = document.querySelectorAll('.paragraph')
        for (let i = 0; i < paragraphs.length; i += 1) {
            paragraphs[i].style.fontSize = size
        }
        localStorage.setItem('fontSize', size)
    }
    const setLineHeight = (height) => {
        let paragraphs = document.querySelectorAll('.paragraph')
        for (let i = 0; i < paragraphs.length; i += 1) {
            paragraphs[i].style.lineHeight = height
        }
        localStorage.setItem('lineHeight', height)
    }
    const setFontFamily = (family) => {
        let paragraphs = document.querySelectorAll('.paragraph')
        for (let i = 0; i < paragraphs.length; i += 1) {
            paragraphs[i];style.fontFamily = family
        }
        localStorage.setItem('fontFamily', family)
    }
    const setPageBackgroundColor = (color) => {
        let content = document.body
        content.style.backgroundColor = color
        localStorage.setItem('backgroundColor', color)
    }
    // Background Color
    let backgroundColorButtons = document.querySelectorAll('#background-color>button')
    for (let i = 0; i < backgroundColorButtons.length; i += 1) {
        backgroundColorButtons[i].addEventListener('click', (event) => {
            setBackgroundColor(event.target.innerHTML)
        })
    }
    // Font Color
    let fontColorButtons = document.querySelectorAll('#font-color>button')
    for (let i = 0; i < fontColorButtons.length; i += 1) {
        fontColorButtons[i].addEventListener('click', (event) => {
            setFontColor(event.target.innerHTML)
        })
    }
    // Font Size
    let fontSizeButtons = document.querySelectorAll('#font-size>button')
    for (let i = 0; i < fontColorButtons.length; i += 1) {
        fontSizeButtons[i].addEventListener('click', (event) => {
            setFontSize(event.target.innerHTML)
        })
    }
    // Line Height
    let lineHeightButtons = document.querySelectorAll('#line-height>button')
    for (let i = 0; i < lineHeightButtons.length; i += 1) {
        lineHeightButtons[i].addEventListener('click', (event) => {
            setLineHeight(event.target.innerHTML)
        })
    }
    // Font Family
    let fontFamilyButtons = document.querySelectorAll('#font-family>button')
    for (let i = 0; i < fontFamilyButtons.length; i += 1) {
        fontFamilyButtons[i].addEventListener('click', (event) => {
            setFontFamily(event.target.innerHTML)
        })
    }
    // Page Background Color
    let pageBackgroundColorButtons = document.querySelectorAll('#navig>button')
    for (let i = 0; i < pageBackgroundColorButtons.length; i += 1) {
        pageBackgroundColorButtons[i].addEventListener('click', (event) => {
            setPageBackgroundColor(event.target.innerHTML)
        })
    }
    const initialize = () => {
        let backgroundColor = localStorage.getItem("backgroundColor")
        if (backgroundColor) setBackgroundColor(backgroundColor)
        let fontColor = localStorage.getItem("fontColor")
        if (fontColor) setFontColor(fontColor)
        let fontSize = localStorage.getItem("fontSize")
        if (fontSize) setFontSize(fontSize)
        let lineHeight = localStorage.getItem("lineHeight")
        if (lineHeight) setLineHeight(lineHeight)
        let fontFamily = localStorage.getItem("fontFamily")
        if (fontFamily) setFontFamily(fontFamily)
    }
    initialize()
}
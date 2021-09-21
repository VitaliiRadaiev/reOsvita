{
    let newsBlocks = document.querySelectorAll('.news-block');
    if(newsBlocks.length) {
        newsBlocks.forEach(block => {
            let col1 = block.querySelector('.news-block__list-col-1');
            let item = block.querySelector('.news-block__list-item');

            col1.append(item);
        })
    }
}
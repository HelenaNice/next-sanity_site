const project = {
    name: 'project', 
    title: 'Projects',
    type: 'document',
    fields: [
        // структура страницы
        // название и ее тип
        {
          name: 'name',
          title: 'Name',
          type: 'string'
        },
        // слаг статьи, который будет отображаться в URL
        // его название берется из имени
        {
          name: 'slug',
          title: 'Slug',
          type: 'slug',
          options: { source: 'name'}
        },
        // Для картинки
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: { hotspot: true },
        //   альтернативный заголовок
          fields: [
            {
              name:'alt',
              title: 'Alt',
              type: 'string'
           }
          ]
        },
        //  URL
        {
          name: 'url',
          title: 'URL',
          type: 'url'
        },
        // content
        {
          name: 'content',
          title: 'Content',
          type: 'array',  //   массив из всего что угодно
          of: [{ type: 'block' }], //разумный способ создания форматированного текста, 
        //   мы называем это блокированием содержимого

        },
    ],
};

// объект по умолчанию для экспорта
export default project;
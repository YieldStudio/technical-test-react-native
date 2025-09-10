import { createServer } from 'miragejs';

createServer({
  seeds(server) {
    server.db.loadData({
      photos: [{
        id: 'photo-1',
        title: 'Quill J',
        url: 'https://images.pexels.com/photos/33425453/pexels-photo-33425453.jpeg',
      },
      {
        id: 'photo-2',
        title: 'Calvin Seng',
        url: 'https://images.pexels.com/photos/33684482/pexels-photo-33684482.jpeg',
      },
      {
        id: 'photo-3',
        title: 'Nay Sa Muel',
        url: 'https://images.pexels.com/photos/27777793/pexels-photo-27777793.jpeg',
      }]
    })
  },
  routes() {
    this.timing = 1000;

    this.get('/photos', (schema) => schema.db.photos);

    this.post('/photos', (schema, request) => {
      const attrs = JSON.parse(request.requestBody);
      const id = `photo-${Date.now()}`;
      return schema.db.photos.insert({ ...attrs, id });
    });

    this.delete('/photos/:id', (schema, request) => {
      const id = request.params.id;
      schema.db.photos.remove(id);
      return { id };
    });
  },
});

import ProjectSchema from '../models/Schema';

export default {

  async index(req, res) {
    const project = await ProjectSchema.find();

    return res.json(project);
  },

  async delete(req, res) {
    const { id } = req.params;
    const project = await ProjectSchema.findByIdAndRemove(id);

    if (!project) {
      return res.json({ message: 'Projeto nao encontrado' });
    }

    return res.json({ message: 'Deletado com sucesso' });
  },

  async update(req, res) {
    const project = await ProjectSchema.update(req.body);
    if (!project) {
      return res.json({ message: 'Projeto nao encontrado' });
    }
    return res.json({ message: 'Atualizado com sucesso' });
  },

  async store(req, res) {
    const { filename } = req.file;
    const {
      name, link, description, stack,
    } = req.body;

    const project = await ProjectSchema.create({
      name,
      image: filename,
      link,
      description,
      stack: stack.split(',').map((stac) => stac.trim()),
    });
    return res.json(project);
  },
};

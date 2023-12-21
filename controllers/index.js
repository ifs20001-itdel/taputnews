const {Content} = require('../models');
const content = require('../models/content');


const findAllContent = async (req, res)=>{
    try {
        const data = await Content.findAll();

        const result = {
            status : 'OK',
            data : data
        }
    
        res.json(result)
        console.log("GET DATA SUCCESS")
    } catch (error) {
        console.log(">>>>>>>>>>>EROR")
    }
}

const findIdContent = async (req, res)=>{
    try {
        const {id} = req.params

        const data = await Content.findByPk(id);
        if (data === null) {
            return res.status(404).json({
                status: 'failed',
                message: `data content with id ${id} is not found`
            })
        } 
        res.json({
            status: 'ok', 
            data: data
        })

    } catch (error) {
        console.log(">>>>>>>>>>>EROR")
    }
}

const createContent = async (req, res)=>{
    try {
        const {name, description} = req.body

        const data = await Content.create({ name:name, description:description });

        res.status(201).json({
            status: 'OK',
            data: {
                name:data.name,
                description:data.description,
            }
        })

    } catch (error) {
        res.json({
            message:"Data tidak dapat di tambahkan"
        })
    }
}


const updateContent = async (req, res)=>{
    try {
       const {id} = req.params
       const {name, description} = req.body

       const content = await Content.findByPk(id)

       if(!content){
        return res.json({
            status: 'Failed',
            message: `data content with id ${id} is not found`
        })
       }

       content.name = name
       content.description = description
       content.save()

       res.json({
        status: 'OK',
        data: {
            name: content.name,
            description: content.description
        }
       })


    } catch (error) {
        res.json({
            message:"Data tidak berhasil di update"
        })
    }
}

const destroyContent = async (req, res)=>{
    const {id} = req.params
    const content = await Content.findByPk(id)

    if(!content){
        return res.json({
            status: 'Failed',
            message: `data content with id ${id} is not found`
        })
    }

    content.destroy()

    res.json({
        status: 'OK',
        message: `data content with id ${id} is deleted sucessfully`
    })
}

module.exports= {findAllContent, findIdContent, createContent, updateContent, destroyContent}
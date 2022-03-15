const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://rahulkishore425:kishore_1995@myfirstdatabasecluster0.ad5cz.mongodb.net/rahulDB?retryWrites=true&w=majority"
  );
};

 
const sectionSchema = new mongoose.Schema(
  {
      sectionName: { type: String, required: true },
      // lastName: { type: String, required: false },
  },
  {
    versionKey: false,
    timestamps: true,  
  }
);
const Sections = mongoose.model("sections", sectionSchema); 
 
const booksSchema = new mongoose.Schema(
    {
      title: { type: String, required: true },
      body: { type: String, required: true },
      
      authorsId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "authors",
        required: true,
      },
      sectionsId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "books",
        required: true,
      },
    },
    {
      versionKey: false,
      timestamps: true,  
    }
  );
 
const Books = mongoose.model("books", booksSchema); 

  
const authorsSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: false },
      
    },
    {
      versionKey: false,
      timestamps: true, // createdAt, updatedAt
    }
  );
  const Authors = mongoose.model("authors", authorsSchema); 


  // CRUD

  app.get("/sections", async (req,res)=>{
    try {
      const sections = await Sections.find().lean().exec();
  
      return res.status(200).send({ sections: sections }); // []
    } catch (err) {
      return res
        .status(500)
        .send({ message: "Something went wrong .. try again later" });
    }
  });


  app.post("/sections", async (req,res)=>{
    try {
      const sections = await Sections.create(req.body);
  
      return res.status(201).send({ sections: sections }); // []
    } catch (err) {
      return res
        .status(500)
        .send({ message: err.message });
    }
  })

 
  // body => req.body
// url => req.params
// query string => req.query

app.get("/sections/:id", async (req, res) => {
  try {
    const sections = await Sections.findById(req.params.id).lean().exec();
    // db.sections.findOne({_id: Object('622893471b0065f917d24a38')})

    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

app.patch("/sections/:id", async (req, res) => {
  try {
    const sections = await Sections.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    // db.sections.update({_id: Object('622893471b0065f917d24a38')}, {$set: {req.body}})

    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

app.delete("/sections/:id", async (req, res) => {
  try {
    const sections = await Sections.findByIdAndDelete(req.params.id).lean().exec();
    // db.sections.deleteOne({_id: Object('622893471b0065f917d24a38')})

    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});




  app.get("/books", async (req,res)=>{
    try {
      const books = await Books.find().lean().exec();
  
      return res.status(200).send({ books: books }); // []
    } catch (err) {
      return res
        .status(500)
        .send({ message: "Something went wrong .. try again later" });
    }
  })


  app.post("/books", async (req,res)=>{
    try {
      const books = await Books.create(req.body);
  
      return res.status(201).send({ books: books }); // []
    } catch (err) {
      return res
        .status(500)
        .send({ message: err.message });
    }
  })

 

app.get("/books/:id", async (req, res) => {
  try {
    const books = await Books.findById(req.params.id).lean().exec();
    // db.books.findOne({_id: Object('622893471b0065f917d24a38')})

    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

app.patch("/books/:id", async (req, res) => {
  try {
    const books = await Books.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    // db.books.update({_id: Object('622893471b0065f917d24a38')}, {$set: {req.body}})

    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

app.delete("/books/:id", async (req, res) => {
  try {
    const books = await Books.findByIdAndDelete(req.params.id).lean().exec();
    // db.sections.deleteOne({_id: Object('622893471b0065f917d24a38')})

    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});


  app.get("/authors", async (req,res)=>{
    try {
      const authors = await Authors.find().lean().exec();
  
      return res.status(200).send({ authors: authors }); // []
    } catch (err) {
      return res
        .status(500)
        .send({ message: "Something went wrong .. try again later" });
    }
  }) 
  
  app.post("/authors", async (req,res)=>{
    try {
      const authors = await Authors.create(req.body);
  
      return res.status(201).send({ authors: authors }); // []
    } catch (err) {
      return res
        .status(500)
        .send({ message: err.message });
    }
  })
 

app.get("/authors/:id", async (req, res) => {
  try {
    const authors = await Authors.findById(req.params.id).lean().exec();
    // db.authors.findOne({_id: Object('622893471b0065f917d24a38')})

    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

app.patch("/authors/:id", async (req, res) => {
  try {
    const authors = await Authors.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    // db.authors.update({_id: Object('622893471b0065f917d24a38')}, {$set: {req.body}})

    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

app.delete("/authors/:id", async (req, res) => {
  try {
    const authors = await Authors.findByIdAndDelete(req.params.id).lean().exec();
    // db.sections.deleteOne({_id: Object('622893471b0065f917d24a38')})

    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});


  app.listen(6000, async()=>{
    try {
        connect();
    } catch (error) {
        console.log("something went wrong");
    }

    console.log("listening at 6000");
})
 
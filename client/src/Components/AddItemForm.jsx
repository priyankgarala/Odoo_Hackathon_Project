// src/components/AddItemForm.jsx
import React, { useState } from "react";
import PhotoUpload from "./PhotoUpload.jsx";
import TagInput from "./TagInput.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const categories = [
  "Tops",
  "Bottoms",
  "Dresses",
  "Outerwear",
  "Shoes",
  "Accessories",
  "Activewear",
  "Formal Wear",
  "Sleepwear",
  "Underwear",
];

const sizes = {
  clothing: ["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL"],
  shoes: [
    "5", "5.5", "6", "6.5", "7", "7.5", "8",
    "8.5", "9", "9.5", "10", "10.5", "11",
    "11.5", "12", "13", "14",
  ],
};

const conditions = [
  { value: "new",        label: "New with Tags" },
  { value: "like-new",   label: "Like New" },
  { value: "excellent",  label: "Excellent" },
  { value: "good",       label: "Good" },
  { value: "fair",       label: "Fair" },
];

export default function AddItemForm() {
  const [formData, setFormData] = useState({
    photos: [],
    title: "",
    description: "",
    category: "",
    type: "",          // Men / Women / Unisex
    size: "",
    condition: "",
    tags: [],
    brand: "",
    color: "",
    material: "",
  });

  const [isPreview, setIsPreview]   = useState(false);
  const [isSubmitting, setLoading]  = useState(false);

  /* ----------------- helpers ----------------- */
  const update = (field) =>
    setFormData(prev => ({ ...prev, [field]: value }));

  const isFormValid =
    formData.title &&
    formData.description &&
    formData.category &&
    formData.type &&
    formData.size &&
    formData.condition &&
    formData.photos.length > 0;

  /* ----------------- submit ------------------ */
  async function handleSubmit(e) {
    e.preventDefault();
    if (!valid) return;
    setLoading(true);

    // fake API call
    await new Promise(r => setTimeout(r, 2000));

    console.log("submitted:", formData);
    setLoading(false);
    // Redirect or toast success here
  }

  /* ----------------- preview ----------------- */
  if (isPreview) {
    return (
      <section className="space-y-6 ">
        <button
          type="button"
          onClick={() => setIsPreview(false)}
          className="text-sm font-medium text-indigo-600 hover:underline flex items-center gap-1"
        >
          ← Back to edit
        </button>

        <div className="border rounded-lg p-6 space-y-4 shadow-sm">
          <h2 className="text-lg font-semibold">Preview</h2>

          {/* 📸  Photo thumbnails */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {formData.photos.map((file, idx) => (
              <img
                key={idx}
                src={URL.createObjectURL(file)}
                alt={`Preview ${idx + 1}`}
                className="w-full h-28 object-cover rounded"
              />
            ))}
          </div>

          {/* 📝  Basic info */}
          <ul className="space-y-1 text-sm text-gray-700">
            <li><strong>Title:</strong> {formData.title}</li>
            <li><strong>Description:</strong> {formData.description}</li>
            <li><strong>Category:</strong> {formData.category}</li>
            <li><strong>Type:</strong> {formData.type}</li>
            <li><strong>Size:</strong> {formData.size}</li>
            <li><strong>Condition:</strong> {formData.condition}</li>
            {formData.brand    && <li><strong>Brand:</strong> {formData.brand}</li>}
            {formData.color    && <li><strong>Color:</strong> {formData.color}</li>}
            {formData.material && <li><strong>Material:</strong> {formData.material}</li>}
            {formData.tags.length > 0 && (
              <li><strong>Tags:</strong> {formData.tags.join(", ")}</li>
            )}
          </ul>

          {/* action buttons */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={() => setIsPreview(false)}
              className="px-4 py-2 border rounded hover:bg-gray-50"
            >
              Edit
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!valid || isSubmitting}
              className="px-4 py-2 bg-indigo-600 text-white rounded disabled:opacity-50"
            >
              {isSubmitting ? "Publishing..." : "Publish Item"}
            </button>
          </div>
        </div>
      </section>
    );
  }

  /* -------------- main form ------------------ */
  return (
    <>
    <Header/>
    <div className="flex flex-col items-center justify-center pt-5">

        <div className="flex flex-col gap-3 text-center">
            <h1 className="text-4xl font-bold">List your Item</h1>
            <p className="text-md text-gray-500">Share your unused clothing with the community and find it a new home</p>
        </div>
        <form onSubmit={handleSubmit} className="mt-5 space-y-8 w-[50%]">
        {/* --- Photos --- */}
        <section className="border rounded-lg p-6 space-y-4 shadow-sm">
            <h2 className="text-lg font-semibold">Photos</h2>
            <p className="text-sm text-gray-500">
            Add up to 8 photos. The first photo will be your main image.
            </p>
            <PhotoUpload
            photos={formData.photos}
            maxPhotos={8}
            onPhotosChange={photos => update("photos", photos)}
            />
        </section>

        {/* --- actions --- */}
        {/* <div className="flex justify-end gap-4">
            <button
            type="button"
            onClick={() => setIsPreview(true)}
            disabled={!isFormValid}
            className="px-4 py-2 border rounded hover:bg-gray-50 disabled:opacity-50"
            >
            Preview
            </button>
            <button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className="px-4 py-2 bg-indigo-600 text-white rounded disabled:opacity-50"
            >
            {isSubmitting ? "Publishing..." : "Publish Item"}
            </button>
        </div> */}



        {/* Basic Information */}
        <div className="rounded border p-6 space-y-6 shadow-sm">
        <h2 className="text-lg font-semibold flex items-center gap-2">
            👕 <span>Basic Information</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
            <label htmlFor="title" className="block text-sm font-medium">Title *</label>
            <input
                id="title"
                type="text"
                placeholder="e.g., Vintage Denim Jacket"
                value={formData.title}
                onChange={(e) => updateFormData("title", e.target.value)}
                required
                className="w-full rounded border px-3 py-2 focus:outline-none focus:ring"
            />
            </div>

            <div className="space-y-2">
            <label htmlFor="brand" className="block text-sm font-medium">Brand</label>
            <input
                id="brand"
                type="text"
                placeholder="e.g., Levi's, Zara, H&M"
                value={formData.brand}
                onChange={(e) => updateFormData("brand", e.target.value)}
                className="w-full rounded border px-3 py-2 focus:outline-none focus:ring"
            />
            </div>
        </div>

        <div className="space-y-2">
            <label htmlFor="description" className="block text-sm font-medium">Description *</label>
            <textarea
            id="description"
            placeholder="Describe your item in detail. Include any flaws, special features, or styling tips..."
            value={formData.description}
            onChange={(e) => updateFormData("description", e.target.value)}
            rows={4}
            required
            className="w-full rounded border px-3 py-2 focus:outline-none focus:ring"
            />
            <p className="text-xs text-gray-500">{formData.description.length}/500 characters</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
            <label htmlFor="color" className="block text-sm font-medium">Color</label>
            <input
                id="color"
                type="text"
                placeholder="e.g., Navy Blue, Black, Red"
                value={formData.color}
                onChange={(e) => updateFormData("color", e.target.value)}
                className="w-full rounded border px-3 py-2 focus:outline-none focus:ring"
            />
            </div>

            <div className="space-y-2">
            <label htmlFor="material" className="block text-sm font-medium">Material</label>
            <input
                id="material"
                type="text"
                placeholder="e.g., 100% Cotton, Polyester Blend"
                value={formData.material}
                onChange={(e) => updateFormData("material", e.target.value)}
                className="w-full rounded border px-3 py-2 focus:outline-none focus:ring"
            />
            </div>
        </div>
        </div>

        {/* Category and Details */}
        <div className="rounded border p-6 space-y-6 shadow-sm">
        <h2 className="text-lg font-semibold flex items-center gap-2">
            📦 <span>Category & Details</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
            <label className="block text-sm font-medium">Category *</label>
            <select
                value={formData.category}
                onChange={(e) => updateFormData("category", e.target.value)}
                className="w-full rounded border px-3 py-2 bg-white focus:outline-none focus:ring"
                required
            >
                <option value="">Select category</option>
                {categories.map((category) => (
                <option key={category} value={category.toLowerCase()}>{category}</option>
                ))}
            </select>
            </div>

            <div className="space-y-2">
            <label className="block text-sm font-medium">Type *</label>
            <select
                value={formData.type}
                onChange={(e) => updateFormData("type", e.target.value)}
                className="w-full rounded border px-3 py-2 bg-white focus:outline-none focus:ring"
                required
            >
                <option value="">Select type</option>
                <option value="women">Women</option>
                <option value="men">Men</option>
                <option value="unisex">Unisex</option>
                <option value="kids">Kids</option>
            </select>
            </div>

            <div className="space-y-2">
            <label className="block text-sm font-medium">Size *</label>
            <select
                value={formData.size}
                onChange={(e) => updateFormData("size", e.target.value)}
                className="w-full rounded border px-3 py-2 bg-white focus:outline-none focus:ring"
                required
            >
                <option value="">Select size</option>
                {(formData.category === "shoes" ? sizes.shoes : sizes.clothing).map((size) => (
                <option key={size} value={size}>{size}</option>
                ))}
            </select>
            </div>
        </div>
        </div>
        


        {/* Condition */}
        <div className="rounded border p-6 shadow-sm space-y-2">
        <h2 className="text-lg font-semibold flex items-center gap-2">
            ⭐ <span>Condition *</span>
        </h2>
        <p className="text-sm text-gray-500">
            Be honest about the condition to set proper expectations
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {conditions.map((condition) => (
            <div
                key={condition.value}
                onClick={() => updateFormData("condition", condition.value)}
                className={`cursor-pointer border rounded-lg p-4 transition-colors ${
                formData.condition === condition.value
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-300 hover:border-blue-400"
                }`}
            >
                <div className="space-y-1">
                <div className="font-medium">{condition.label}</div>
                <div className="text-sm text-gray-500">{condition.description}</div>
                </div>
            </div>
            ))}
        </div>
        </div>

        {/* Tags */}
        <div className="rounded border p-6 shadow-sm space-y-4">
        <h2 className="text-lg font-semibold flex items-center gap-2">
            🏷️ <span>Tags</span>
        </h2>
        <p className="text-sm text-gray-500">
            Add tags to help others find your item (optional)
        </p>

        {/* Tag Input */}
        <TagInput
            tags={formData.tags}
            onChange={(tags) => updateFormData("tags", tags)}
            placeholder="Add tags like 'vintage', 'casual', 'summer'..."
        />

        {/* Popular Tags */}
        <div>
            <p className="text-sm font-medium mb-2">Popular tags:</p>
            <div className="flex flex-wrap gap-2">
            {["vintage", "casual", "formal", "summer", "winter", "trendy", "classic", "boho"].map((tag) => (
                <span
                key={tag}
                onClick={() => {
                    if (!formData.tags.includes(tag)) {
                    updateFormData("tags", [...formData.tags, tag]);
                    }
                }}
                className="cursor-pointer rounded bg-gray-200 px-3 py-1 text-sm hover:bg-blue-600 hover:text-white"
                >
                {tag}
                </span>
            ))}
            </div>
        </div>
        </div>

        {/* Submit Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-end pt-6">
        <button
            type="button"
            onClick={() => setIsPreview(true)}
            disabled={!isFormValid}
            className="inline-flex items-center justify-center rounded border px-4 py-2 text-sm hover:bg-gray-100 disabled:opacity-50"
        >
            👁️ <span className="ml-2">Preview</span>
        </button>

        <button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className="inline-flex items-center justify-center rounded bg-blue-600 px-4 py-2 text-sm text-white disabled:opacity-50 min-w-[140px]"
        >
            {isSubmitting ? "Publishing..." : <>💾 <span className="ml-2">Publish Item</span></>}
        </button>
        </div>

{/* Validation Warning */}
{!isFormValid && (
  <div className="mt-4 rounded border border-orange-300 bg-orange-50 p-4 text-sm text-orange-700">
    Please fill in all required fields (*) and add at least one photo to publish your item.
  </div>
)}

        </form>
    </div>
    <div className="mt-7">
        <Footer/>
    </div>
    </>

  );
}

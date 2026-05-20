    let fileName = await tp.system.prompt("File Name?");
	await tp.file.rename(fileName);
    await tp.file.move("/foods/" + fileName);
    